import { useTranslation } from 'react-i18next';
import dockShoesBlue from '../../../assets/images/dock-shoes-blue.png';
import dockShoesRed from '../../../assets/images/dock-shoes-red.png';
import nikeBlue from '../../../assets/images/nike-blue.png';
import nikeRed from '../../../assets/images/nike-red.png';
import sneakersBlack from '../../../assets/images/sneakers-black.png';
import sneakersGray from '../../../assets/images/sneakers-gray.png';
import { IProduct } from '../../../types';
import { createRandomProduct } from '../../../utils';

interface IProductRawData {
  imageURL: string;
  name: string;
  description: string;
}
export function useLayoutService() {
  const { t } = useTranslation();

  const productsList: IProduct[] = [
    { imageURL: dockShoesBlue, description: t('dockShoes.description'), name: t('dockShoes.name') },
    { imageURL: dockShoesRed, description: t('dockShoes.description'), name: t('dockShoes.name') },
    { imageURL: nikeBlue, description: t('nike.description'), name: t('nike.name') },
    { imageURL: nikeRed, description: t('nike.description'), name: t('nike.name') },
    { imageURL: sneakersBlack, description: t('sneakers.description'), name: t('sneakers.name') },
    { imageURL: sneakersGray, description: t('sneakers.description'), name: t('sneakers.name') },
    { imageURL: dockShoesBlue, description: t('dockShoes.description'), name: t('dockShoes.name') },
    { imageURL: dockShoesRed, description: t('dockShoes.description'), name: t('dockShoes.name') },
    { imageURL: nikeBlue, description: t('nike.description'), name: t('nike.name') },
    { imageURL: nikeRed, description: t('nike.description'), name: t('nike.name') },
    { imageURL: sneakersBlack, description: t('sneakers.description'), name: t('sneakers.name') },
    { imageURL: sneakersGray, description: t('sneakers.description'), name: t('sneakers.name') },
  ].map((productData: IProductRawData) =>
    createRandomProduct(productData.name, productData.imageURL, productData.description, t('category.shoes'))
  );

  return {
    productsList,
  };
}
