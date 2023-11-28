import { Form } from 'antd';
import clsx from 'clsx';
import React, { memo } from 'react';
import { Title } from '../../../components/Title';
import styles from './FormItem.module.scss';

interface IFormItemProps {
  children: React.ReactNode | React.ReactNode[];
  title: React.ReactNode | React.ReactNode[] | string;
  className?: string;
  required?: boolean;
}

export const FormItem = memo(({ children, title, className, required }: IFormItemProps) => {
  return (
    <div className={clsx(styles.formItemContainer, className)}>
      <Title required={required}>{title}</Title>
      <Form.Item>{children}</Form.Item>
    </div>
  );
});

FormItem.displayName = 'FormItem';
