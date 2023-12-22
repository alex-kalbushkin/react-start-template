import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { LocaleLanguage } from './types';
import translationEN from './locales/en/translation.json';
import translationRU from './locales/ru/translation.json';

const resources = {
  en: {
    translation: translationEN,
  },
  ru: {
    translation: translationRU,
  },
};

/* eslint-disable */
i18n
  .use(Backend) // load translation using http -> /public/locales
  .use(LanguageDetector) // detect user language
  .use(initReactI18next) // pass the i18n instance to react-i18next
  .init({
    fallbackLng: LocaleLanguage.En,
    supportedLngs: ['en', 'ru'],
    nonExplicitSupportedLngs: true, // Allows "en-US"-"en-UK" to be supported when "en" is implicitly supported
    debug: process.env.NODE_ENV === 'development',
    interpolation: {
      escapeValue: false,
    },
    resources,
  });
/* eslint-enable */

export default i18n;
