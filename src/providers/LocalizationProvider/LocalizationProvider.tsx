import React, { useCallback, useLayoutEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { LocaleLanguage } from './types';

interface ILocalizationProviderProps {
  children: React.ReactNode;
}

interface ILocalizationContext {
  lang: string;
  switchLang: () => void;
}

const LocalizationContext = React.createContext<ILocalizationContext>({} as ILocalizationContext);

export const useLocalizationContext = () => React.useContext(LocalizationContext);

export const LocalizationProvider = ({ children }: ILocalizationProviderProps) => {
  const { i18n } = useTranslation();

  const [lang, setLang] = useState(i18n.resolvedLanguage || LocaleLanguage.En);

  useLayoutEffect(() => {
    const htmlElement = document.body.parentElement;
    htmlElement.lang = lang;
  }, [lang]);

  const switchLang = useCallback(() => {
    setLang((prevLang) => {
      const newLang = prevLang === LocaleLanguage.En ? LocaleLanguage.Ru : LocaleLanguage.En;

      i18n.changeLanguage(newLang);
      return newLang;
    });
  }, [i18n]);

  const providerValue = useMemo(
    () => ({
      lang,
      switchLang,
    }),
    [lang, switchLang]
  );

  return (
    <LocalizationContext.Provider value={providerValue}>
      <div>{children}</div>
    </LocalizationContext.Provider>
  );
};
