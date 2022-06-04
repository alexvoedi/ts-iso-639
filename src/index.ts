import { Iso639 } from "./data/Iso639";
import { LocaleCode639_1 } from "./data/LocaleCode639-1";
import { LocaleCode639_2B } from "./data/LocaleCode639-2B";
import { LocaleCode639_2T } from "./data/LocaleCode639-2T";
import { LocaleCode639_3 } from "./data/LocaleCode639-3";

const findIso639_1 = (lang: LocaleCode639_1) =>
  Iso639.find((locale) => locale["639-1"] === lang);

export const getLocaleData = (lang: LocaleCode639_1) => {
  return findIso639_1(lang);
};

export const getEnglishName = (lang: LocaleCode639_1) => {
  const locale = findIso639_1(lang);

  if (locale) {
    return locale.englishName;
  } else {
    return null;
  }
};

export const getNativeName = (lang: LocaleCode639_1) => {
  const locale = findIso639_1(lang);

  if (locale) {
    return locale.nativeName;
  } else {
    return null;
  }
};

export const getCodesByEnglishName = (englishName: string) => {
  return Iso639.find((locale) => locale.englishName === englishName);
};

export { LocaleCode639_1, LocaleCode639_2B, LocaleCode639_2T, LocaleCode639_3 };
