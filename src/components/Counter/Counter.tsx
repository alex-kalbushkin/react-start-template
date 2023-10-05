import clsx from 'clsx';
import React from 'react';
import { IconButton } from '../IconButton';
import styles from './Counter.module.scss';
import { faCircleMinus, faCirclePlus } from '@fortawesome/free-solid-svg-icons';

interface ICounterProps {
  counter: number;
}

export const Counter = ({ counter }: ICounterProps) => {
  return (
    <div className={styles.counter}>
      <IconButton className={clsx(styles.counterButton, styles.decrease)} icon={faCircleMinus} handleClick={null} />

      <input type="text" className={styles.counterInput} value={counter} readOnly />

      <IconButton className={clsx(styles.counterButton, styles.increase)} icon={faCirclePlus} handleClick={null} />
    </div>
  );
};
