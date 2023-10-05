import clsx from 'clsx';
import React, { FC } from 'react';
import { Logo } from '../Logo';
import styles from './Header.module.scss';

interface IHeaderProps {
  className?: string;
}

export const Header: FC<IHeaderProps> = ({ className = '' }) => {
  return (
    <header className={clsx(styles.headerContainer, className)}>
      <Logo />
      <nav className={styles.navigationContainer}>Future navigation bar</nav>
    </header>
  );
};
