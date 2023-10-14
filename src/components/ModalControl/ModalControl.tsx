import React, { useState } from 'react';
import { ModalWindow } from '../ModalWindow';
import styles from './ModalControl.module.scss';

export const ModalControl = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [modalChildText, setModalChildText] = useState('');

  const handleModalOpen = () => {
    setModalVisible(true);
  };
  const handleModalClose = () => {
    setModalVisible(false);
  };
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setModalChildText(event.target.value);
  };

  return (
    <div className={styles.modalControlContainer}>
      <input
        type="text"
        className={styles.modalControlInput}
        placeholder="Enter modal content"
        value={modalChildText}
        onChange={(e) => handleInputChange(e)}
      />
      <button className={styles.modalControlButton} onClick={handleModalOpen}>
        Open Modal
      </button>

      <ModalWindow isModalVisible={isModalVisible} onHandleModalClose={handleModalClose}>
        {modalChildText}
      </ModalWindow>
    </div>
  );
};
