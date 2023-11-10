import React from 'react';
import { IProduct } from '../../types';
import { ProductFull } from '../ProductFull';

interface IProductsListProps {
  productsList: IProduct[];
}

export const ProductsList = ({ productsList }: IProductsListProps) => {
  return (
    <div>
      {productsList.map((product) => (
        <ProductFull key={product.id} product={product} />
      ))}
    </div>
  );
};
