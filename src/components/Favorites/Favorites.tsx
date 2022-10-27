import React from 'react';
import RedirectComponent from '../../assets/hoc/RedirectComponent';
import { useAppSelector } from '../../hooks/redux';
import styles from '../../styles/Favorites.module.scss';
import { FavoritesProp } from '../../TypeProps/TypeProps';
import FavoriteElement from './FavoriteElement/FavoriteElement';

const Favorites: React.FC<FavoritesProp> = ({ }) => {
	const { favorites } = useAppSelector(state => state.favoritesSlice);
	
	return (
		<RedirectComponent>
			<div
				className={styles.favorites}
			>
				<h3
					className={styles.favorites__header}
				>
					Избранное
				</h3>
				{
					favorites.length > 0
					&& favorites
						.map(h => <FavoriteElement
							key={h.valueReq}
							favorite={h}
						/>
						)
				}
			</div>
		</RedirectComponent>
	);
};

export default Favorites;