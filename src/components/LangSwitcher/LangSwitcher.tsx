import React from 'react';
import clsx from 'clsx';
import { useLocalizationContext } from '../../providers';
import styles from './LangSwitcher.module.scss';

interface ILangSwitcherProps {
  className?: string;
}

export const LangSwitcher = ({ className }: ILangSwitcherProps) => {
  const { lang, switchLang } = useLocalizationContext();

  return (
    <button type="button" className={clsx(styles.langSwitcher, className)} onClick={switchLang}>
      {lang}
    </button>
  );
};
