import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useThemeContext, useTokenContext } from '../../providers';
import { Theme } from '../../providers/ThemeProvider/types';
import styles from './Logout.module.scss';

const logoutIcons = {
  [Theme.Dark]: <FontAwesomeIcon icon={faRightFromBracket} color="black" />,
  [Theme.Light]: <FontAwesomeIcon icon={faRightFromBracket} color="gray" />,
};

export const Logout = () => {
  const { theme } = useThemeContext();

  const {
    tokenActions: { logout },
  } = useTokenContext();

  const handleLogout = () => {
    logout();
  };

  return (
    <button className={styles.logoutContainer} onClick={handleLogout}>
      {logoutIcons[theme]}
    </button>
  );
};
