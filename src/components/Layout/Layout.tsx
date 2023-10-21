import React from 'react';
import { useTranslation } from 'react-i18next';
import { Header } from '../Header';
import styles from './Layout.module.scss';
import Chocolate from '../../assets/images/chocolate.png';
import { ProductFull } from '../ProductFull';

interface ILayoutProps {
  children?: React.ReactNode;
}

export const Layout = ({ children }: ILayoutProps) => {
  const { t } = useTranslation();

  return (
    <div className={styles.layoutContainer}>
      <Header />
      <ProductFull
        title={t('chocolate.name')}
        price={50}
        imageUrl={Chocolate}
        categoryName={t('category.food')}
        description={t('chocolate.description')}
      />

      {children}
    </div>
  );
};
