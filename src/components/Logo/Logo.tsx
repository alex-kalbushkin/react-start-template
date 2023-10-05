import clsx from 'clsx';
import React, { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMeteor } from '@fortawesome/free-solid-svg-icons';
import styles from './Logo.module.scss';

interface ILogoProps {
  className?: string;
}

export const Logo: FC<ILogoProps> = ({ className }) => {
  return (
    <div className={clsx(styles.logoContainer, className)}>
      <FontAwesomeIcon icon={faMeteor} className={styles.logoIcon} />
    </div>
  );
};
