import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import React, { ReactNode } from 'react';
import styles from './ModalWindow.module.scss';

export interface IModalWindowProps {
  isModalVisible: boolean;
  headerText?: string;
  children: ReactNode;
  onHandleModalClose: () => void;
}

export const ModalWindow = ({ isModalVisible, children, headerText = '', onHandleModalClose }: IModalWindowProps) => {
  if (!isModalVisible) {
    return null;
  }

  return (
    <div className={styles.modalWindowMask}>
      <div className={styles.modalWindow}>
        <div className={styles.modalHeader}>
          <h4 className={styles.headerText}>{headerText}</h4>
          <FontAwesomeIcon className={styles.headerIcon} icon={faXmark} onClick={onHandleModalClose} />
        </div>

        <div className={styles.modalContent}>{children}</div>
      </div>
    </div>
  );
};
