import { use } from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

import EnGb from "./lang/en_gb.json";
import ZhCn from "./lang/zh_cn.json";
import ZhHk from "./lang/zh_hk.json";

import { defaultLang } from "config/lang-config";

// learn more: https://github.com/i18next/i18next-http-backend
// detect user language
// learn more: https://github.com/i18next/i18next-browser-languageDetector
use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    keySeparator: false,
    nsSeparator: false,
    fallbackLng: defaultLang,
    lng: defaultLang,
    debug: false,
    resources: {
      en_gb: {
        translation: EnGb,
      },
      zh_cn: {
        translation: ZhCn,
      },
      zh_hk: {
        translation: ZhHk,
      },
    },
    lowerCaseLng: true, // 语言小写模式：en-US>en-us
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  });
