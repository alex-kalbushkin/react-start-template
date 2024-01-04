import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Form, Input } from 'antd';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { Title } from '../../../components/Title';
import { FormItem } from '../FormItem';
import { ProductFormData, ProductFormFieldNames } from './types';
import { schema } from './validation';
import styles from '../Form.module.scss';

interface IProductFormProps {
  additionalSubmitHandler?: () => void | Promise<void>;
}

export const ProductForm = ({ additionalSubmitHandler }: IProductFormProps) => {
  const { t } = useTranslation();

  const {
    control,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    defaultValues: {
      price: null,
      categoryName: '',
      name: '',
      description: '',
    },
    mode: 'onBlur',
    resolver: yupResolver(schema),
  });

  const onHandleSubmit = (data: ProductFormData) => {
    console.log(data);
    reset();

    if (additionalSubmitHandler) {
      additionalSubmitHandler();
    }
  };

  return (
    <Form name="productForm" autoComplete="off" className={styles.form} onFinish={handleSubmit(onHandleSubmit)}>
      <Title className={styles.formTitle}>{t('form.productForm.title')}</Title>

      <Controller
        control={control}
        name={ProductFormFieldNames.Price}
        render={({ field }) => (
          <FormItem title={t('form.productForm.price.title')} required>
            <Input
              {...field}
              className={styles.field}
              placeholder={t('form.productForm.price.placeholder')}
              type="number"
            />
            <p className={styles.errorMessage}>
              {errors.price?.message.includes('required') && t('form.productForm.price.errorRequired')}
              {errors.price?.message.includes('1') && t('form.productForm.price.errorMin')}
              {errors.price?.message.includes('number') && t('form.productForm.price.errorNumber')}
            </p>
          </FormItem>
        )}
      />

      <Controller
        control={control}
        name={ProductFormFieldNames.CategoryName}
        render={({ field }) => (
          <FormItem title={t('form.productForm.categoryName.title')} required>
            <Input {...field} className={styles.field} placeholder={t('form.productForm.categoryName.placeholder')} />
            <p className={styles.errorMessage}>
              {errors.categoryName?.message.includes('required') && t('form.productForm.categoryName.errorRequired')}
              {errors.categoryName?.message.includes('5') && t('form.productForm.categoryName.errorMin')}
            </p>
          </FormItem>
        )}
      />

      <Controller
        control={control}
        name={ProductFormFieldNames.Name}
        render={({ field }) => (
          <FormItem title={t('form.productForm.name.title')} required>
            <Input {...field} className={styles.field} placeholder={t('form.productForm.name.placeholder')} />
            <p className={styles.errorMessage}>
              {errors.price?.message.includes('required') && t('form.productForm.name.errorRequired')}
              {errors.price?.message.includes('3') && t('form.productForm.name.errorMin')}
            </p>
          </FormItem>
        )}
      />

      <Controller
        control={control}
        name={ProductFormFieldNames.Description}
        render={({ field }) => (
          <FormItem title={t('form.productForm.description.title')}>
            <Input {...field} className={styles.field} placeholder={t('form.productForm.description.placeholder')} />
          </FormItem>
        )}
      />

      <Button className={styles.submit} htmlType="submit">
        {t('form.submit')}
      </Button>
    </Form>
  );
};
