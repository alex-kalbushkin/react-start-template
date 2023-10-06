import clsx from 'clsx';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMeteor } from '@fortawesome/free-solid-svg-icons';
import { HeaderTheme } from '../Header';
import styles from './Logo.module.scss';

interface ILogoProps {
  theme?: HeaderTheme;
  className?: string;
}

export const Logo = ({ theme = HeaderTheme.Common, className }: ILogoProps) => {
  return (
    <div className={clsx(styles.logoContainer, className, { [styles.darkIcon]: theme === HeaderTheme.Dark })}>
      <FontAwesomeIcon icon={faMeteor} className={styles.logoIcon} />
    </div>
  );
};
