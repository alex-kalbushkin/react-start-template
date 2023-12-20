import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './NotFound.module.scss';

export const NotFound = () => {
  const { t } = useTranslation();

  return <div className={styles.notFoundContainer}>{t('navigation.notFound')}</div>;
};
