import React from 'react';
import styles from '../../styles/Favorites.module.scss';

const Favorites = () => {
	return (
		<div
			className={styles.favorites}
		>
			<h3
				className={styles.favorites__header}
			>
				Избранное
			</h3>
			<div
				className={styles.favorites__block}
			>
				<div
					className={styles.favorites__block_element}
				>
					'ktvtyn'
				</div>
			</div>

		</div>
	);
};

export default Favorites;