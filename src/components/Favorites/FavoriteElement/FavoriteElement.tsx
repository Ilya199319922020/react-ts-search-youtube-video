import React from 'react';
import { valuePropsModalFormUpdate } from '../../../assets/valueProps/valueProps';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { openCloseModal } from '../../../store/reducers/ActionCreatotrs';
import styles from '../../../styles/Favorites.module.scss';
import { FavoriteElementProps } from '../../../TypeProps/TypeProps';
import ModalForm from '../../AuxiliaryComponent/ModalForm';
import ModalVideo from '../../Video/ModalVideo/ModalVideo';

const FavoriteElement: React.FC<FavoriteElementProps> = ({ favorite }) => {
	const { valueReq } = favorite;
	const dispatch = useAppDispatch();
	const { isModal } = useAppSelector(state => state.favoritesSlice)

	const onModalOpen = (e: React.MouseEvent<HTMLElement>) => {
		e.preventDefault();
		dispatch(openCloseModal(!isModal));
	};

	return (
		<div
			className={styles.favoritesElement}
		>
			{
				isModal
				&&
				<ModalVideo>
					<ModalForm
						favorite={favorite}
						valueField={valueReq}
						{...valuePropsModalFormUpdate}
					/>
				</ModalVideo>
			}
			<span
				className={styles.favoritesElement__text}
			>
				{
					valueReq
				}
			</span>
			<div
				className={styles.favoritesElement__block}
			>
				<button
					className={styles.favoritesElement__block_executeBtn}
				>
					Выполнить
				</button>
				<button
					className={styles.favoritesElement__block_updateBtn}
					onClick={onModalOpen}
				>
					Изменить
				</button>
			</div>
		</div>
	);
};

export default FavoriteElement;