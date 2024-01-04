import clsx from 'clsx';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import { useTokenContext } from '../../providers/TokenProvider';
import { Logo } from '../Logo';
import { LangSwitcher } from '../LangSwitcher';
import styles from './Header.module.scss';
import { Logout } from '../Logout';
import { ThemeSwitcher } from '../ThemeSwitcher';

const getLinkClassName = ({ isActive }: { isActive: boolean }) => clsx(styles.link, isActive && styles.activeLink);

export const Header = () => {
  const { t } = useTranslation();

  const { token } = useTokenContext();

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
          <NavLink to="/cart" className={getLinkClassName}>
            {t('navigation.cart')}
          </NavLink>
        </div>

        <div className={styles.switchers}>
          <LangSwitcher />
          <ThemeSwitcher />

          {token && <Logout />}
        </div>
      </nav>
    </header>
  );
};
