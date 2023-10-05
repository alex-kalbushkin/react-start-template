import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import React from 'react';
import styles from './IconButton.module.scss';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

interface IIconButtonProps {
  icon: IconDefinition;
  disabled?: boolean;
  className?: string;
  handleClick: () => void;
}

export const IconButton = ({ icon, disabled, className = '', handleClick }: IIconButtonProps) => {
  return (
    <button className={clsx(className, styles.iconButton, { [styles.disabled]: disabled })} onClick={handleClick}>
      <FontAwesomeIcon icon={icon} className={styles.icon} />
    </button>
  );
};
