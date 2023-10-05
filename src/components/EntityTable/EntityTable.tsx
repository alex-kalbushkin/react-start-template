import clsx from 'clsx';
import React from 'react';
import styles from './EntityTable.module.scss';

export interface ITableCell {
  dataItemTitle: string;
  dataItemValue: string;
  itemButton?: React.ReactNode;
  imageUrl?: string;
}

export interface ITableRow {
  tableCells: ITableCell[];
}

export interface IEntityTableProps {
  tableRows: ITableRow[];
  className?: string;
}

export const EntityTable = ({ tableRows, className }: IEntityTableProps) => {
  return (
    <table className={clsx(className, styles.tableDataContainer)}>
      {tableRows.map((tableRow, tableRowIndex) => (
        <tr key={tableRowIndex} className={styles.tableRow}>
          {tableRow.tableCells.map((tableCell, tableCellIndex) => {
            const { dataItemTitle, dataItemValue, itemButton, imageUrl } = tableCell;

            return (
              <td key={tableCellIndex} className={styles.tableCellData}>
                {imageUrl && <img src={imageUrl} alt="image" className={styles.image} />}

                {dataItemTitle && dataItemValue && (
                  <div className={styles.cellTextDataContainer}>
                    <span className={styles.dataItemTitle}>{dataItemTitle}</span>
                    <span className={styles.dataItemValue}>{dataItemValue}</span>
                  </div>
                )}

                {itemButton && <div className={styles.cellButtonContainer}>{itemButton}</div>}
              </td>
            );
          })}
        </tr>
      ))}
    </table>
  );
};
