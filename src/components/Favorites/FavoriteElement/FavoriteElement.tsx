import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { valuePropsModalFormUpdate } from '../../../assets/valueProps/valueProps';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { fetchListVideo, openCloseModal } from '../../../store/reducers/ActionCreatotrs';
import styles from '../../../styles/Favorites.module.scss';
import { FavoriteElementProps } from '../../../TypeProps/TypeProps';
import ModalForm from '../../AuxiliaryComponent/ModalForm';
import ModalVideo from '../../Video/ModalVideo/ModalVideo';

const FavoriteElement: React.FC<FavoriteElementProps> = ({ favorite }) => {
	const { valueReq, maxAmount } = favorite;
	const dispatch = useAppDispatch();
	const { isModal } = useAppSelector(state => state.favoritesSlice);
	const [isExecuteReq, setIsExecuteReq] = useState(false);

	const onHandleRepeat = (e: React.MouseEvent<HTMLElement>) => {
		e.preventDefault();
		setIsExecuteReq(true);
	};
	const onModalOpen = (e: React.MouseEvent<HTMLElement>) => {
		e.preventDefault();
		dispatch(openCloseModal(!isModal));
		
	};

	useEffect(() => {
		if (isExecuteReq) {
			dispatch(fetchListVideo({ name: valueReq, maxResult: maxAmount }));
			setIsExecuteReq(false);
		}
	}, [isExecuteReq]);

	// if (isExecuteReq) {
	// 	return <Navigate to='/search' />
	// }
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
					onClick={onHandleRepeat}
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