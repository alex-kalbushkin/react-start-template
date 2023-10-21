import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb as lightBulbIcon } from '@fortawesome/free-regular-svg-icons';
import { faLightbulb as darkBulbIcon } from '@fortawesome/free-solid-svg-icons';
import clsx from 'clsx';
import React from 'react';
import { useThemeContext } from '../../providers';
import { Theme } from '../../providers/ThemeProvider/types';
import styles from './ThemeSwitcher.module.scss';

interface IThemeSwitcherProps {
  className?: string;
}

const switchIcons = {
  [Theme.Light]: <FontAwesomeIcon icon={lightBulbIcon} />,
  [Theme.Dark]: <FontAwesomeIcon icon={darkBulbIcon} />,
};

export const ThemeSwitcher = ({ className }: IThemeSwitcherProps) => {
  const { theme, switchTheme } = useThemeContext();

  return (
    <button onClick={switchTheme} className={clsx(styles.themeSwitcherContainer, className)}>
      {switchIcons[theme]}
    </button>
  );
};
