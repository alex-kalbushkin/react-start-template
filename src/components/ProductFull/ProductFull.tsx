import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { EntityRow, IRowCell } from '../EntityRow';
import { IconButton } from '../IconButton';

interface IProductTotalDescriptionProps {
  categoryName: string;
  description: string;
  imageUrl: string;
  title: string;
  price: number;
}

export const ProductTotalDescription = ({
  categoryName,
  description,
  imageUrl,
  title,
  price,
}: IProductTotalDescriptionProps) => {
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
      itemButton: <IconButton icon={faCartPlus} disabled handleClick={null} />,
    },
  ];

  return <EntityRow rowCells={mockRowCellsData} />;
};
