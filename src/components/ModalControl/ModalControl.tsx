import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { ModalWindow } from '../ModalWindow';
import styles from './ModalControl.module.scss';

interface IModalControlProps {
  elementContainer?: HTMLElement;
}

export const ModalControl = ({ elementContainer = document.body }: IModalControlProps) => {
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

      {createPortal(
        <ModalWindow isModalVisible={isModalVisible} onHandleModalClose={handleModalClose}>
          {modalChildText}
        </ModalWindow>,
        elementContainer
      )}
    </div>
  );
};
