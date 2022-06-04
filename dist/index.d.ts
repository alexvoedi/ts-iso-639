import { LocaleCode639_1 } from "./data/LocaleCode639-1";
import { LocaleCode639_2B } from "./data/LocaleCode639-2B";
import { LocaleCode639_2T } from "./data/LocaleCode639-2T";
import { LocaleCode639_3 } from "./data/LocaleCode639-3";
export declare const getLocaleData: (lang: LocaleCode639_1) => import("./TIso639").TIso639 | undefined;
export declare const getEnglishName: (lang: LocaleCode639_1) => string | null;
export declare const getNativeName: (lang: LocaleCode639_1) => string | null;
export declare const getCodesByEnglishName: (englishName: string) => import("./TIso639").TIso639 | undefined;
export { LocaleCode639_1, LocaleCode639_2B, LocaleCode639_2T, LocaleCode639_3 };
