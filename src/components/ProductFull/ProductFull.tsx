import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { IProduct } from '../../types';
import { EntityRow, IRowCell } from '../EntityRow';
import { IconButton } from '../IconButton';

interface IProductFullProps {
  product: IProduct;
}

export const ProductFull = ({ product }: IProductFullProps) => {
  const {
    category: { categoryTitle },
    description,
    disabled = true,
    imageURL,
    price,
    productTitle,
  } = product;

  const { t } = useTranslation();

  const mockRowCellsData: IRowCell[] = [
    {
      imageURL,
    },
    {
      dataItemTitle: t('product.price'),
      dataItemValue: price.toString(),
      isPrice: true,
    },
    {
      dataItemTitle: t('product.categoryName'),
      dataItemValue: categoryTitle,
    },
    {
      dataItemTitle: t('product.name'),
      dataItemValue: productTitle,
    },
    {
      dataItemTitle: t('product.description'),
      dataItemValue: description,
    },
    {
      itemButton: <IconButton icon={faCartPlus} disabled={disabled} handleClick={null} />,
    },
  ];

  return <EntityRow rowCells={mockRowCellsData} />;
};
