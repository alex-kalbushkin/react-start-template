import React from 'react';
import { Logo } from '../Logo';
import { ThemeSwitcher } from '../ThemeSwitcher';
import styles from './Header.module.scss';

export const Header = () => {
  return (
    <header className={styles.headerContainer}>
      <Logo />
      <nav className={styles.navigationContainer}>
        <ThemeSwitcher />
      </nav>
    </header>
  );
};
