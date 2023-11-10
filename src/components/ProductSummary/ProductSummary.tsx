import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { IProduct } from '../../types';
import { truncateText } from '../../utils';
import { EntityRow, IRowCell } from '../EntityRow';
import { IconButton } from '../IconButton';

export interface IProductSummaryProps {
  product: IProduct;
}

export const ProductSummary = ({ product }: IProductSummaryProps) => {
  const { description, disabled = true, imageURL, price, productTitle } = product;

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
      dataItemTitle: t('product.name'),
      dataItemValue: productTitle,
    },
    {
      dataItemTitle: t('product.description'),
      dataItemValue: truncateText(description, 13),
    },
    {
      itemButton: <IconButton icon={faCartPlus} disabled={disabled} handleClick={null} />,
    },
  ];

  return <EntityRow rowCells={mockRowCellsData} />;
};
