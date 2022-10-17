import React from 'react';
import { useAppSelector } from '../hooks/redux';
import styles from '../styles/Container.module.scss';
import Search from './Search/Search';
import VideoList from './Video/VideoList';

const Container = () => {
	const { videoList } = useAppSelector(state => state.videoSlice);
	const { searchField } = useAppSelector(state => state.favoritesSlice);
	return (
		<div
			className={styles.container}
		>
			<Search />
			{
				videoList.length > 0
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