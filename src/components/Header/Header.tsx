import React from 'react';
import { Logo } from '../Logo';
import { ThemeSwitcher } from '../ThemeSwitcher';
import styles from './Header.module.scss';
import { LangSwitcher } from '../LangSwitcher';

export const Header = () => {
  return (
    <header className={styles.headerContainer}>
      <Logo />
      <nav className={styles.navigationContainer}>
        <LangSwitcher />
        <ThemeSwitcher />
      </nav>
    </header>
  );
};
