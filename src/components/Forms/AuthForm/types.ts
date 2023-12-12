import * as yup from 'yup';
import { schema } from './validation';

export enum AuthFormFieldNames {
  Email = 'email',
  Password = 'password',
}

export type AuthFormData = yup.InferType<typeof schema>;
