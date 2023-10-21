import * as i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { LocaleLanguage } from './types';

i18n
  .use(Backend) // load translation using http -> /public/locales
  .use(LanguageDetector) // detect user language
  .use(initReactI18next) // pass the i18n instance to react-i18next
  .init({
    fallbackLng: LocaleLanguage.En,
    debug: true,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
