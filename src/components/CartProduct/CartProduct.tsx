import React from 'react';
import { DeleteFromCart } from '../DeleteFromCart';
import styles from './CartProduct.module.scss';

export const CartProduct = () => {
  return (
    <div className={styles.cartProductContainer}>
      <div className={styles.cartProduct}>Future Cart Product</div>
      <DeleteFromCart disabled handleClick={null} />
    </div>
  );
};
