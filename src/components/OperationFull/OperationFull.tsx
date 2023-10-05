import React, { FC } from 'react';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { IOperationSummaryProps } from '../OperationSummary';
import { IconButton } from '../IconButton';
import { EntityRow, IRowCell } from '../EntityRow';

interface IOperationFullProps extends IOperationSummaryProps {
  transactionDate: Date;
}

export const OperationFull: FC<IOperationFullProps> = ({
  categoryName,
  description,
  title,
  transactionAmount,
  transactionDate,
}) => {
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
      dataItemValue: transactionDate.toDateString(),
      isWideCell: true,
    },
    {
      itemButton: <IconButton disabled icon={faPen} handleClick={null} />,
    },
  ];

  return <EntityRow rowCells={mockRowCellsData} />;
};
