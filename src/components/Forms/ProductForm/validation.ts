import { number, object, string } from 'yup';

export const schema = object({
  price: number().required().min(1),
  categoryName: string().required().min(5),
  name: string().required().min(3),
  description: string(),
});
