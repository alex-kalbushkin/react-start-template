import clsx from 'clsx';
import React from 'react';
import styles from './Title.module.scss';

export type TitleProps = React.HTMLAttributes<HTMLDivElement> & {
  className?: string;
  children: React.ReactElement | React.ReactNode;
  required?: boolean;
};

export const Title = ({ className, required, ...restProps }: TitleProps) => (
  <div {...restProps} className={clsx(styles.titleContainer, required && styles.required, className)} />
);
