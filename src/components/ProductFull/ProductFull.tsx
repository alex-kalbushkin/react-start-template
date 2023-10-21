import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { EntityRow, IRowCell } from '../EntityRow';
import { IconButton } from '../IconButton';
import { IProductSummaryProps } from '../ProductSummary';

interface IProductFullProps extends IProductSummaryProps {
  categoryName: string;
}

export const ProductFull = ({
  categoryName,
  description,
  imageUrl,
  title,
  price,
  disabled = true,
}: IProductFullProps) => {
  const { t } = useTranslation();

  const mockRowCellsData: IRowCell[] = [
    {
      imageUrl,
    },
    {
      dataItemTitle: t('product.price'),
      dataItemValue: price.toString(),
      isPrice: true,
    },
    {
      dataItemTitle: t('product.categoryName'),
      dataItemValue: categoryName,
    },
    {
      dataItemTitle: t('product.name'),
      dataItemValue: title,
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
