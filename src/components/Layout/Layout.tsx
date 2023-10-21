import React from 'react';
import { Header } from '../Header';
import styles from './Layout.module.scss';
import Chocolate from '../../assets/images/chocolate.png';
import { ProductFull } from '../ProductFull';

interface ILayoutProps {
  children?: React.ReactNode;
}

export const Layout = ({ children }: ILayoutProps) => {
  return (
    <div className={styles.layoutContainer}>
      <Header />
      <ProductFull
        title="Dark chocolate"
        price={50}
        imageUrl={Chocolate}
        categoryName="Food"
        description="Best product ever made"
      />

      {children}
    </div>
  );
};
