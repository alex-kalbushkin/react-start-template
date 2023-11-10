import { ICategory } from './category';

export interface IProduct {
  id: string;
  productTitle: string;
  imageURL: string;
  description: string;
  createdAt: Date;
  oldPrice: number;
  price: number;
  category?: ICategory;
  disabled?: boolean;
}
