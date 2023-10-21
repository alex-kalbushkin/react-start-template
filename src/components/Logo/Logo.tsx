import clsx from 'clsx';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMeteor } from '@fortawesome/free-solid-svg-icons';
import styles from './Logo.module.scss';

interface ILogoProps {
  className?: string;
}

export const Logo = ({ className }: ILogoProps) => {
  return (
    <div className={clsx(styles.logoContainer, className)}>
      <FontAwesomeIcon icon={faMeteor} className={styles.logoIcon} />
    </div>
  );
};
