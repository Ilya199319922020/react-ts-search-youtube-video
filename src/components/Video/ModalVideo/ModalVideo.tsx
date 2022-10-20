import React from 'react';
import styles from '../../../styles/Modal.module.scss';
import { ModalVideoProps } from '../../../TypeProps/TypeProps';

const ModalVideo: React.FC<ModalVideoProps> = ({ children }) => {
  return (
    <>
      <div
        className={styles.background}
      />
      <div
        className={styles.modal}
      >
        <div
          className={styles.modal__block}
        >
          {children}
        </div>
      </div>
    </>
  )
};

export default ModalVideo;