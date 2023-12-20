import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { AuthForm, ProductForm, ProfileForm } from '../Forms';
import { Layout } from '../Layout';
import { useLayoutService } from '../Layout/services';
import { NotFound } from '../NotFound';
import { ProductsList } from '../ProductsList';

interface INavigationProps {
  children?: React.ReactNode;
}

const NavigationCommon = () => {
  const { productsList } = useLayoutService();

  return (
    <Layout>
      <Routes>
        <Route index element={<Navigate to="/profile" replace />} />
        <Route path="/profile" element={<ProfileForm />} />
        <Route path="/products" element={<ProductsList productsList={productsList} />} />
        <Route path="/product-add" element={<ProductForm />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
};

export const Navigation = ({ children }: INavigationProps) => (
  <BrowserRouter>
    {children}
    <Routes>
      <Route path="/auth" element={<AuthForm />} />
      <Route path="*" element={<NavigationCommon />} />
    </Routes>
  </BrowserRouter>
);
