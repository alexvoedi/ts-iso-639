import fs from "fs";

const url =
  "https://iso639-3.sil.org/sites/iso639-3/files/downloads/iso-639-3.tab";

const dir = `./src/data`;

const createEnum = (name: string, keys: string[]) => {
  return `export enum ${name} {${keys.map((v) => `\r\n  ${v} = "${v}"`)}}`;
};

type NullableString = string | null;

type Iso639 = {
  "639-3": NullableString;
  "639-2B": NullableString;
  "639-2T": NullableString;
  "639-1": NullableString;
  nativeName: NullableString;
  englishName: NullableString;
};

(async () => {
  const req = await fetch(url);
  const res = await req.text();

  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }

  const [, ...rawData]: string[] = res.split("\r\n");

  // Id, Part2B, Part2T, Part1, Scope, Language_Type, Ref_Name, Comment
  const data: Iso639[] = rawData
    .filter((row) => {
      const cols = row.split("\t");

      return cols[3];
    })
    .map((row) => {
      const cols = row.split("\t");

      return {
        "639-3": cols[0],
        "639-2B": cols[1],
        "639-2T": cols[2],
        "639-1": cols[3],
        nativeName: null,
        englishName: cols[6],
      };
    });

  data.forEach((d) => {
    const lang = d["639-1"];

    if (lang) {
      d.nativeName =
        new Intl.DisplayNames(lang, {
          type: "language",
        }).of(lang) ?? null;

      d.englishName =
        new Intl.DisplayNames("en", {
          type: "language",
        }).of(lang) ?? null;
    }
  });

  fs.writeFileSync(
    `${dir}/Iso639.ts`,
    `import { TIso639 } from "../TIso639";
     export const Iso639 = ${JSON.stringify(data, null, 2)} as TIso639[]`
  );

  const values_639_1 = data
    .map((row) => row["639-1"])
    .filter(Boolean) as string[];

  fs.writeFileSync(
    `${dir}/LocaleCode639-1.ts`,
    createEnum("LocaleCode639_1", values_639_1)
  );

  const values_639_2B = data
    .map((row) => row["639-2B"])
    .filter(Boolean) as string[];

  fs.writeFileSync(
    `${dir}/LocaleCode639-2B.ts`,
    createEnum("LocaleCode639_2B", values_639_2B)
  );

  const values_639_2T = data
    .map((row) => row["639-2T"])
    .filter(Boolean) as string[];

  fs.writeFileSync(
    `${dir}/LocaleCode639-2T.ts`,
    createEnum("LocaleCode639_2T", values_639_2T)
  );

  const values_639_3 = data
    .map((row) => row["639-3"])
    .filter(Boolean) as string[];

  fs.writeFileSync(
    `${dir}/LocaleCode639-3.ts`,
    createEnum("LocaleCode639_3", values_639_3)
  );
})();
