import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import React, { ReactNode } from 'react';
import styles from './ModalWindow.module.scss';

interface IModalWindowProps {
  visible: boolean;
  children: ReactNode;
  headerText?: string;
}

export const ModalWindow = ({ visible, children, headerText = '' }: IModalWindowProps) => {
  if (!visible) {
    return null;
  }

  return (
    <div className={styles.modalWindowMask}>
      <div className={styles.modalWindow}>
        <div className={styles.modalHeader}>
          <h4 className={styles.headerText}>{headerText}</h4>
          <FontAwesomeIcon className={styles.headerIcon} icon={faXmark} />
        </div>

        <div className={styles.modalContent}>{children}</div>
      </div>
    </div>
  );
};
