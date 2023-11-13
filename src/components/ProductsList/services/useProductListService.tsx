import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import dockShoesBlue from '../../../assets/images/dock-shoes-blue.png';
import { createRandomProduct } from '../../../utils';
import { IProduct } from '../../../types';

export function useProductListService(productsList: IProduct[]) {
  const { t } = useTranslation();

  const [productListIntersected, setProductListIntersected] = useState(productsList);

  const observerRef = useRef<IntersectionObserver | null>(null);
  const elementRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observerOptions: IntersectionObserverInit = {
      root: null,
      rootMargin: '0px',
      threshold: [0.5],
    };

    observerRef.current = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        const newListItem = createRandomProduct(
          t('dockShoes.name'),
          dockShoesBlue,
          t('dockShoes.description'),
          t('category.shoes')
        );

        setProductListIntersected([...productListIntersected, newListItem]);
      }
    }, observerOptions);

    if (elementRef.current) {
      observerRef.current.observe(elementRef.current);
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [t, productListIntersected]);

  return { elementRef, productListIntersected };
}
