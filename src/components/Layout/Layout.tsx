import React from 'react';
import { AuthForm, ProfileForm } from '../Forms';
import { Header } from '../Header';
import { ModalControl } from '../ModalControl';
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
      <ModalControl />

      <ProfileForm />

      <AuthForm />

      <ProductsList productsList={productsList} />

      {children}
    </div>
  );
};
