import React from 'react';
import { IProduct } from '../../types';
import { ProductFull } from '../ProductFull';
import { useProductListService } from './services';

interface IProductsListProps {
  productsList: IProduct[];
}

export const ProductsList = ({ productsList }: IProductsListProps) => {
  const { elementRef, productListIntersected } = useProductListService(productsList);

  return (
    <div>
      {productListIntersected.map((product, productIndex) => (
        <div key={product.id} ref={productIndex === productListIntersected.length - 1 ? elementRef : null}>
          <ProductFull product={product} />
        </div>
      ))}
    </div>
  );
};
