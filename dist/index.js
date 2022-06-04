"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocaleCode639_3 = exports.LocaleCode639_2T = exports.LocaleCode639_2B = exports.LocaleCode639_1 = exports.Iso639 = exports.getCodesByEnglishName = exports.getNativeName = exports.getEnglishName = exports.getLocaleData = void 0;
const Iso639_1 = require("./data/Iso639");
Object.defineProperty(exports, "Iso639", { enumerable: true, get: function () { return Iso639_1.Iso639; } });
const LocaleCode639_1_1 = require("./data/LocaleCode639-1");
Object.defineProperty(exports, "LocaleCode639_1", { enumerable: true, get: function () { return LocaleCode639_1_1.LocaleCode639_1; } });
const LocaleCode639_2B_1 = require("./data/LocaleCode639-2B");
Object.defineProperty(exports, "LocaleCode639_2B", { enumerable: true, get: function () { return LocaleCode639_2B_1.LocaleCode639_2B; } });
const LocaleCode639_2T_1 = require("./data/LocaleCode639-2T");
Object.defineProperty(exports, "LocaleCode639_2T", { enumerable: true, get: function () { return LocaleCode639_2T_1.LocaleCode639_2T; } });
const LocaleCode639_3_1 = require("./data/LocaleCode639-3");
Object.defineProperty(exports, "LocaleCode639_3", { enumerable: true, get: function () { return LocaleCode639_3_1.LocaleCode639_3; } });
const findIso639_1 = (lang) => Iso639_1.Iso639.find((locale) => locale["639-1"] === lang);
const getLocaleData = (lang) => {
    return findIso639_1(lang);
};
exports.getLocaleData = getLocaleData;
const getEnglishName = (lang) => {
    const locale = findIso639_1(lang);
    if (locale) {
        return locale.englishName;
    }
    else {
        return null;
    }
};
exports.getEnglishName = getEnglishName;
const getNativeName = (lang) => {
    const locale = findIso639_1(lang);
    if (locale) {
        return locale.nativeName;
    }
    else {
        return null;
    }
};
exports.getNativeName = getNativeName;
const getCodesByEnglishName = (englishName) => {
    return Iso639_1.Iso639.find((locale) => locale.englishName === englishName);
};
exports.getCodesByEnglishName = getCodesByEnglishName;
