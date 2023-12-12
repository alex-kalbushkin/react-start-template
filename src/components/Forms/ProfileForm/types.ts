import * as yup from 'yup';
import { schema } from './validation';

export enum ProfileFormFieldNames {
  UserName = 'userName',
  About = 'about',
}

export type ProfileFormData = yup.InferType<typeof schema>;
