import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import style from '../../../styles/Modal.module.scss';
import { ModalSaveProps } from '../../../TypeProps/TypeProps';

const ModalSave: React.FC<ModalSaveProps> = ({ setIsModalSave }) => {
	const onCloseModalSave = (e: React.MouseEvent<HTMLElement>) => {
		e.preventDefault();
		setIsModalSave(false);
	};

	return (
		<div
			className={style.modalSave}
		>
			<div
				className={style.modalSave__text}
			>
				Поиск сохранён в разделе <q
					className={style.modalSave__elem}
				>
					Избранное
				</q>
			</div>
			<button
				onClick={onCloseModalSave}
				className={style.modalSave__btn}
			>
				<NavLink
					className={style.modalSave__link}
					to='/favorites'
				>
					Перейти в избранное
				</NavLink>
			</button>
		</div>
	);
};
export default ModalSave;