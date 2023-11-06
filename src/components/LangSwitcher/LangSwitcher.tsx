import React from 'react';
import clsx from 'clsx';
import { useTranslation } from 'react-i18next';
import { LocaleLanguage } from '../../localization/types';
import styles from './LangSwitcher.module.scss';

interface ILangSwitcherProps {
  className?: string;
}

export const LangSwitcher = ({ className }: ILangSwitcherProps) => {
  const { i18n } = useTranslation();

  const currentLanguage = i18n.language;

  const handleLanguageSwitch = () => {
    currentLanguage === LocaleLanguage.En
      ? i18n.changeLanguage(LocaleLanguage.Ru)
      : i18n.changeLanguage(LocaleLanguage.En);
  };

  return (
    <button type="button" className={clsx(styles.langSwitcher, className)} onClick={handleLanguageSwitch}>
      {currentLanguage}
    </button>
  );
};
