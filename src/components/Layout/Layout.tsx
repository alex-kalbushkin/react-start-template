import React from 'react';
import { Header } from '../Header';
import { ProductsList } from '../ProductsList';
import { useLayoutService } from './services';
import styles from './Layout.module.scss';

interface ILayoutProps {
  children?: React.ReactNode;
}

export const Layout = ({ children }: ILayoutProps) => {
  const { productsList } = useLayoutService();

  return (
    <div className={styles.layoutContainer}>
      <Header />
      <ProductsList productsList={productsList} />

      {children}
    </div>
  );
};
