import React from 'react';
import { Header } from '../Header';
import styles from './Layout.module.scss';

interface ILayoutProps {
  children?: React.ReactNode;
}

export const Layout = ({ children }: ILayoutProps) => {
  return (
    <div className={styles.layoutContainer}>
      <Header />

      <main className={styles.mainContainer}>{children}</main>
    </div>
  );
};
