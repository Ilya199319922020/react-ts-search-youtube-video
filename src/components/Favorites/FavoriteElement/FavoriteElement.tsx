import React from 'react';
import styles from '../../../styles/Favorites.module.scss';
import { FavoriteElementProps } from '../../../TypeProps/TypeProps';

const FavoriteElement: React.FC<FavoriteElementProps> = ({ valueReq }) => {
	return (
		<div
			className={styles.favoritesElement}
		>
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
				>
					Изменить
				</button>
			</div>
		</div>
	);
};

export default FavoriteElement;