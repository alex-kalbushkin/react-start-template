import clsx from 'clsx';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import { Logo } from '../Logo';
import { ThemeSwitcher } from '../ThemeSwitcher';
import styles from './Header.module.scss';
import { LangSwitcher } from '../LangSwitcher';

const getLinkClassName = ({ isActive }: { isActive: boolean }) => clsx(styles.link, isActive && styles.activeLink);

export const Header = () => {
  const { t } = useTranslation();

  return (
    <header className={styles.headerContainer}>
      <NavLink to="/">
        <Logo />
      </NavLink>
      <nav className={styles.navigationContainer}>
        <div className={styles.linksContainer}>
          <NavLink to="/profile" className={getLinkClassName}>
            {t('navigation.profile')}
          </NavLink>
          <NavLink to="/product-add" className={getLinkClassName}>
            {t('navigation.productAdd')}
          </NavLink>
          <NavLink to="/products" className={getLinkClassName}>
            {t('navigation.products')}
          </NavLink>
        </div>

        <div className={styles.switchers}>
          <LangSwitcher />
          <ThemeSwitcher />
        </div>
      </nav>
    </header>
  );
};
