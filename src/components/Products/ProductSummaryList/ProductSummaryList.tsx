import React from 'react';
import { IProductsListProps } from '../../ProductsList';
import { ProductSummary } from '../../ProductSummary';

export const ProductSummaryList = ({ productsList }: IProductsListProps) => {
  return (
    <>
      {productsList.map((product, index) => (
        <ProductSummary key={index} product={product} />
      ))}
    </>
  );
};
