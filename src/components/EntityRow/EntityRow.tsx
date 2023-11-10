import clsx from 'clsx';
import React from 'react';
import styles from './EntityRow.module.scss';

export interface IRowCell {
  dataItemTitle?: string;
  dataItemValue?: string;
  isWideCell?: boolean;
  isPrice?: boolean;
  itemButton?: React.ReactNode;
  imageURL?: string;
}

export interface ITableRowProps {
  rowCells: IRowCell[];
  className?: string;
}

export const EntityRow = ({ rowCells, className }: ITableRowProps) => (
  <div className={clsx(className, styles.entityRow)}>
    {rowCells.map((rowCell, rowCellIndex) => {
      const { dataItemTitle, dataItemValue, itemButton, imageURL, isWideCell, isPrice } = rowCell;

      return (
        <div
          key={rowCellIndex}
          className={clsx(styles.cellDataContainer, {
            [styles.cellDataImage]: !!imageURL,
            [styles.cellDataButton]: !!itemButton,
            [styles.cellDataWide]: isWideCell,
            [styles.cellDataPrice]: isPrice,
          })}
        >
          {imageURL && <img src={imageURL} alt="image" className={styles.cellImage} />}

          {dataItemTitle && dataItemValue && (
            <div className={styles.cellTextDataContainer}>
              <span className={styles.dataItemValue}>{dataItemValue}</span>
              <span className={styles.dataItemTitle}>{dataItemTitle}</span>
            </div>
          )}

          {itemButton && <div className={styles.cellButtonContainer}>{itemButton}</div>}
        </div>
      );
    })}
  </div>
);
