import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { IconButton } from '../IconButton';
import styles from './DeleteFromCart.module.scss';

interface IDeleteFromCartProps {
  disabled?: boolean;
  handleClick: () => void | null;
}

export const DeleteFromCart = ({ disabled = true, handleClick }: IDeleteFromCartProps) => {
  return (
    <div className={styles.deleteFormCartButtonContainer}>
      <IconButton icon={faTrashCan} disabled={disabled} handleClick={() => handleClick?.()} />
    </div>
  );
};
