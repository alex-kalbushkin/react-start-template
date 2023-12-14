import * as yup from 'yup';
import { schema } from './validation';

export enum ProductFormFieldNames {
  Price = 'price',
  CategoryName = 'categoryName',
  Name = 'name',
  Description = 'description',
}

export type ProductFormData = yup.InferType<typeof schema>;
