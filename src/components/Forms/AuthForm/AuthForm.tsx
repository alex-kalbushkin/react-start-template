import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Form, Input } from 'antd';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Title } from '../../../components/Title';
import { useTokenContext } from '../../../providers/TokenProvider';
import { FormItem } from '../FormItem';
import styles from '../Form.module.scss';
import { AuthFormData, AuthFormFieldNames } from './types';
import { schema } from './validation';

export const AuthForm = () => {
  const { t } = useTranslation();

  const {
    control,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onBlur',
    resolver: yupResolver(schema),
  });

  const location = useLocation();
  const navigate = useNavigate();
  const {
    tokenActions: { login },
  } = useTokenContext();

  const onHandleSubmit = (data: AuthFormData) => {
    console.log(data);
    reset();

    login();
    navigate((location.state.from as Location) || '/');
  };

  return (
    <Form name="authForm" autoComplete="off" className={styles.form} onFinish={handleSubmit(onHandleSubmit)}>
      <Title className={styles.formTitle}>{t('form.authForm.title')}</Title>

      <Controller
        name={AuthFormFieldNames.Email}
        control={control}
        render={({ field }) => (
          <FormItem title={t('form.authForm.email.title')} required>
            <Input {...field} className={styles.field} placeholder={t('form.authForm.email.placeholder')} />
            <p className={styles.errorMessage}>
              {errors.email?.message.includes('required') && t('form.authForm.email.errorRequired')}
              {errors.email?.message.includes('valid email') && t('form.authForm.email.errorValidEmail')}
            </p>
          </FormItem>
        )}
      />

      <Controller
        control={control}
        name={AuthFormFieldNames.Password}
        render={({ field }) => (
          <FormItem title={t('form.authForm.password.title')} required>
            <Input {...field} className={styles.field} placeholder={t('form.authForm.password.placeholder')} />
            <p className={styles.errorMessage}>
              {errors.password?.message.includes('required') && t('form.authForm.password.errorRequired')}
            </p>
          </FormItem>
        )}
      />

      <Button className={styles.submit} htmlType="submit">
        {t('form.submit')}
      </Button>
    </Form>
  );
};
