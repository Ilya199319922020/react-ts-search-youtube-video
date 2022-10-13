import React from 'react';
import styles from '../../../styles/Modal.module.scss';

const ModalVideo = () => {
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
          <h4
            className={styles.modal__block_title}
          >
            Сохранить запрос
          </h4>
          <form
            className={styles.modal__block_form}
          >
            <div
              className={styles.modal__block_formTextRequest}
            >
              Запрос
            </div>
            <input
              className={styles.modal__block_formInputRequest}
              type={'text'}
            />
            <div
              className={styles.modal__block_formTextName}
            >
              Название
            </div>
            <input
              className={styles.modal__block_formInputName}
              type={'text'}
            />
            <div
              className={styles.modal__block_formTextSort}
            >
              Сортировать по
            </div>
            <input
              className={styles.modal__block_formInputSort}
              type={'text'}
            />
            <div
              className={styles.modal__block_formRatingBlock}            >
              <input
                className={styles.modal__block_formRatingInput}
                type="range"
                min="1"
                max="50"
                value=""
              />

              <div
                className={styles.modal__block_formRatingCount}
              >
                5
              </div>
            </div>

            <div
              className={styles.modal__block_formBtn}
            >
              <button
                className={styles.modal__block_formBtnNoSave}
                type='submit'
              >
                Не сохранять
              </button>
              <button
                className={styles.modal__block_formBtnSave}
                type='submit'
              >
                Сохранить
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
};

export default ModalVideo;