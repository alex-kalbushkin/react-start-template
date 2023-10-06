import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { truncateText } from '../../utils';
import { EntityRow, IRowCell } from '../EntityRow';
import { IconButton } from '../IconButton';

export interface IProductSummaryProps {
  description: string;
  imageUrl: string;
  price: number;
  title: string;
  disabled?: boolean;
}

export const ProductSummary = ({ description, imageUrl, price, title, disabled = true }: IProductSummaryProps) => {
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
      dataItemTitle: 'Name',
      dataItemValue: title,
    },
    {
      dataItemTitle: 'Description',
      dataItemValue: truncateText(description, 13),
    },
    {
      itemButton: <IconButton icon={faCartPlus} disabled={disabled} handleClick={null} />,
    },
  ];

  return <EntityRow rowCells={mockRowCellsData} />;
};
