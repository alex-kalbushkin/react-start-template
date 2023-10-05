import React, { FC } from 'react';
import { Header } from '../Header';
import styles from './Layout.module.scss';

interface ILayoutProps {
  children?: React.ReactNode;
}

export const Layout: FC<ILayoutProps> = ({ children }) => {
  return (
    <div className={styles.layoutContainer}>
      <Header />
      {children}
    </div>
  );
};
