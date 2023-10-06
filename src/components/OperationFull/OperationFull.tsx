import React from 'react';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { IOperationSummaryProps } from '../OperationSummary';
import { IconButton } from '../IconButton';
import { EntityRow, IRowCell } from '../EntityRow';

interface IOperationFullProps extends IOperationSummaryProps {
  transactionDate: Date | number;
  disabled?: boolean;
}

export const OperationFull = ({
  categoryName,
  description,
  title,
  transactionAmount,
  transactionDate,
  disabled = true,
}: IOperationFullProps) => {
  const stringifiedDate: string = (
    typeof transactionDate === 'number' ? new Date(transactionDate) : transactionDate
  ).toDateString();

  const mockRowCellsData: IRowCell[] = [
    {
      dataItemTitle: 'Price',
      dataItemValue: transactionAmount.toString(),
      isPrice: true,
    },
    {
      dataItemTitle: 'Category',
      dataItemValue: categoryName,
    },
    {
      dataItemTitle: 'Operation',
      dataItemValue: title,
    },
    {
      dataItemTitle: 'Description',
      dataItemValue: description,
      isWideCell: true,
    },
    {
      dataItemTitle: 'Transaction date',
      dataItemValue: stringifiedDate,
      isWideCell: true,
    },
    {
      itemButton: <IconButton disabled={disabled} icon={faPen} handleClick={null} />,
    },
  ];

  return <EntityRow rowCells={mockRowCellsData} />;
};
