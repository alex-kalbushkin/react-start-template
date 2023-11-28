import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Input } from 'antd';
import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { Title } from '../../../components/Title';
import { FormItem } from '../FormItem';
import styles from '../Form.module.scss';
import { ProfileFormData, ProfileFormFieldNames } from './types';
import { schema } from './validation';

export const ProfileForm = () => {
  const { t } = useTranslation();

  const {
    control,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<ProfileFormData>({
    defaultValues: {
      userName: '',
      about: '',
    },
    resolver: yupResolver(schema),
  });

  const onHandleSubmit = (data: ProfileFormData) => {
    console.log('profileFormData: ', data);
    reset();
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onHandleSubmit)}>
      <Title className={styles.formTitle}>{t('form.profileForm.title')}</Title>

      <Controller
        name={ProfileFormFieldNames.UserName}
        control={control}
        render={({ field }) => (
          <FormItem title={t('form.profileForm.userName.title')} required>
            <Input {...field} className={styles.field} placeholder={t('form.profileForm.userName.placeholder')} />
            <p className={styles.errorMessage}>
              {errors.userName?.message.includes('required') && t('form.profileForm.userName.errorRequired')}
            </p>
          </FormItem>
        )}
      />

      <Controller
        name={ProfileFormFieldNames.About}
        control={control}
        render={({ field }) => (
          <FormItem title={t('form.profileForm.about.title')} required>
            <Input {...field} className={styles.field} placeholder={t('form.profileForm.about.placeholder')} />
            <p className={styles.errorMessage}>
              {errors.about?.message.includes('required') && t('form.profileForm.about.errorRequired')}
            </p>
          </FormItem>
        )}
      />

      <Button className={styles.submit} htmlType="submit">
        {t('form.submit')}
      </Button>
    </form>
  );
};
