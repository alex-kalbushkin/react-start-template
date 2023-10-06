import clsx from 'clsx';
import React from 'react';
import { Logo } from '../Logo';
import styles from './Header.module.scss';

export enum HeaderTheme {
  Common = 'common',
  Dark = 'dark',
}

interface IHeaderProps {
  theme?: HeaderTheme;
}

export const Header = ({ theme = HeaderTheme.Common }: IHeaderProps) => {
  return (
    <header className={clsx(styles.headerContainer, { [styles.dark]: theme === HeaderTheme.Dark })}>
      <Logo theme={theme} />
      <nav className={styles.navigationContainer}>Future navigation bar</nav>
    </header>
  );
};
