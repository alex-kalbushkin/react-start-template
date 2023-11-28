import * as yup from 'yup';
import { schema } from './validation';

export enum ProfileFormFieldNames {
  UserName = 'userName',
  About = 'about',
}

export interface IProfileFormFields {
  [ProfileFormFieldNames.UserName]: string;
  [ProfileFormFieldNames.About]: string;
}

export type ProfileFormData = yup.InferType<typeof schema>;
