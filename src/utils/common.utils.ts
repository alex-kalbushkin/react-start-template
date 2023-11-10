import { v4 as uuidv4 } from 'uuid';
import { IProduct } from '../types';

export const truncateText = (text: string, maxLength = 30) => {
  if (text.length <= maxLength) {
    return text;
  }

  return text.substring(0, maxLength) + '...';
};

export const createRandomProduct = (
  productTitle: string,
  imageURL: string,
  description: string,
  categoryTitle: string
): IProduct => {
  const productId: string = uuidv4();
  const createdAt = new Date();
  const randomNum = createdAt.getDate();

  return {
    id: productId,
    productTitle,
    imageURL,
    description,
    createdAt,
    oldPrice: randomNum + 10,
    price: randomNum * 2 + 5,
    category: {
      id: uuidv4(),
      categoryTitle,
    },
  };
};
