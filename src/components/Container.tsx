import React, { useState } from 'react';
import { useAppSelector } from '../hooks/redux';
import styles from '../styles/Container.module.scss';
import Favorites from './Favorites/Favorites';
import Header from './Header/Header';
import Search from './Search/Search';
import VideoList from './Video/VideoList';

const Container = () => {
	const [isSearchPage, setIsSearchPage] = useState(true);
	const { videoList } = useAppSelector(state => state.videoSlice);
	const [searchField, setSeachField] = useState('');

	return (
		<div
			className={styles.container}
		>
			<Header
				setIsSearchPage={setIsSearchPage}
				isSearchPage={isSearchPage}
			/>
			{
				isSearchPage
				&&
				<Search
					searchField={searchField}
					setSeachField={setSeachField}
					videoList={videoList}
				/>
			}
			{
				!isSearchPage
				&&
				<Favorites/>
			}
			{
				videoList.length > 0
				&&
				isSearchPage
				&&
				<VideoList
					videoList={videoList}
					searchField={searchField}
				/>
			}
		</div>
	);
};

export default Container;