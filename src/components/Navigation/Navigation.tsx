import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { AuthForm, ProfileForm } from '../Forms';
import { Layout } from '../Layout';
import { useLayoutService } from '../Layout/services';
import { AddProductWithModal } from '../Modals';
import { NotFound } from '../NotFound';
import { ProductSummaryList } from '../Products';
import { ProductsList } from '../ProductsList';
import { ProtectedRoute } from './ProtectedRoute';
import styles from './Navigation.module.scss';

interface INavigationProps {
  children?: React.ReactNode;
}

const NavigationCommon = () => {
  const { productsList } = useLayoutService();
  const cartProducts = productsList.filter((p, index) => index <= 3);

  return (
    <ProtectedRoute>
      <Layout>
        <Routes>
          <Route index element={<Navigate to="/profile" replace />} />
          <Route path="/profile" element={<ProfileForm />} />
          <Route path="/products" element={<ProductsList productsList={productsList} />} />
          <Route path="/product-add" element={<AddProductWithModal />} />
          <Route path="/cart" element={<ProductSummaryList productsList={cartProducts} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </ProtectedRoute>
  );
};

export const Navigation = ({ children }: INavigationProps) => (
  <div className={styles.navContainer}>
    {children}
    <Routes>
      <Route path="/auth" element={<AuthForm />} />
      <Route path="*" element={<NavigationCommon />} />
    </Routes>
  </div>
);
