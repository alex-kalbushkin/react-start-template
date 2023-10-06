import React from 'react';
import { truncateText } from '../../utils';
import { EntityRow, IRowCell } from '../EntityRow';

export interface IOperationSummaryProps {
  categoryName: string;
  description: string;
  title: string;
  transactionAmount: number;
}

export const OperationSummary = ({ transactionAmount, categoryName, title, description }: IOperationSummaryProps) => {
  const mockRowCellsData: IRowCell[] = [
    {
      dataItemTitle: 'Price',
      dataItemValue: transactionAmount.toString(),
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
      dataItemTitle: 'Short description',
      dataItemValue: truncateText(description, 15),
    },
  ];

  return <EntityRow rowCells={mockRowCellsData} />;
};
