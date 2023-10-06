import React from 'react';
import { DeleteFromCart } from '../DeleteFromCart';
import styles from './CartProduct.module.scss';

interface ICartProductProps {
  disabled?: boolean;
}

export const CartProduct = ({ disabled = true }: ICartProductProps) => {
  return (
    <div className={styles.cartProductContainer}>
      <div className={styles.cartProduct}>Future Cart Product</div>
      <DeleteFromCart disabled={disabled} handleClick={null} />
    </div>
  );
};
