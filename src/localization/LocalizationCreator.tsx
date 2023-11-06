import { FC, useLayoutEffect } from 'react';
import { useTranslation } from 'react-i18next';

export const LocalizationCreator: FC = () => {
  const { i18n } = useTranslation();

  useLayoutEffect(() => {
    const htmlElement = document.body.parentElement;
    htmlElement.lang = i18n.language;
  }, [i18n.language]);

  return null;
};
