import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { IconButton } from '../IconButton';
import { Counter } from '../Counter';
import styles from './AddToCart.module.scss';

interface IAddToCartProps {
  counter?: number;
  disabled?: boolean;
}

export const AddToCart = ({ counter = 0, disabled = true }: IAddToCartProps) => {
  return (
    <div className={styles.addToCartContainer}>
      {counter ? (
        <Counter counter={counter} />
      ) : (
        <div className={styles.productDataContainer}>
          <div className={styles.productData}>Future product data</div>
          <IconButton icon={faCartPlus} disabled={disabled} handleClick={null} />
        </div>
      )}
    </div>
  );
};
