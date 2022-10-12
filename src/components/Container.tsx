import React, { useState } from 'react';
import styles from '../styles/Container.module.scss';
import Favorites from './Favorites/Favorites';
import Header from './Header/Header';
import Search from './Search/Search';

const Container = () => {
	const [isSearchPage, setIsSearchPage] = useState(false);

	return (
		<div
			className={styles.container}
		>
			<Header />
			{
				isSearchPage && <Search />
			}
			{
				!isSearchPage && <Favorites />
			}
		</div>
	);
};

export default Container;