import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
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
  const mockRowCellsData: IRowCell[] = [
    {
      imageUrl,
    },
    {
      dataItemTitle: 'Price',
      dataItemValue: price.toString(),
      isPrice: true,
    },
    {
      dataItemTitle: 'Category name',
      dataItemValue: categoryName,
    },
    {
      dataItemTitle: 'Name',
      dataItemValue: title,
    },
    {
      dataItemTitle: 'Description',
      dataItemValue: description,
    },
    {
      itemButton: <IconButton icon={faCartPlus} disabled={disabled} handleClick={null} />,
    },
  ];

  return <EntityRow rowCells={mockRowCellsData} />;
};
