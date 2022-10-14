import React, { useState } from 'react';
import styles from '../styles/Container.module.scss';
import Favorites from './Favorites/Favorites';
import Header from './Header/Header';
import Search from './Search/Search';
import ModalVideo from './Video/ModalVideo/ModalVideo';
import VideoList from './Video/VideoList';

const Container = () => {
	const [isSearchPage, setIsSearchPage] = useState(true);

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
			{
			// isSearchPage && <VideoList/>
			}

			{/* <ModalVideo/> */}
		</div>
	);
};

export default Container;