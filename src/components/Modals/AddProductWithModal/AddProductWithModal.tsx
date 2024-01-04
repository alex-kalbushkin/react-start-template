import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { useTranslation } from 'react-i18next';
import { ProductForm } from '../../Forms';
import { ModalWindow } from '../../ModalWindow';
import styles from './AddProductWithModal.module.scss';

export const AddProductWithModal = () => {
  const { t } = useTranslation();

  const [isModalOpened, setModalOpened] = useState(false);

  const closeModal = () => {
    setModalOpened(false);
  };

  return (
    <div className={styles.modalAddProductContainer}>
      <button className={styles.buttonOpenModal} onClick={() => setModalOpened(true)}>
        {t('modal.openModal')}
      </button>

      {createPortal(
        <ModalWindow isModalVisible={isModalOpened} onHandleModalClose={closeModal} withContentCentered>
          <ProductForm additionalSubmitHandler={closeModal} />
        </ModalWindow>,
        document.body
      )}
    </div>
  );
};
