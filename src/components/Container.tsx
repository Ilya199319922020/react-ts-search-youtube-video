import React, { useState } from 'react';
import { useAppSelector } from '../hooks/redux';
import styles from '../styles/Container.module.scss';
import Search from './Search/Search';
import VideoList from './Video/VideoList';

const Container = () => {
	const [searchField, setSeachField] = useState('');
	const { videoList } = useAppSelector(state => state.videoSlice);
	
	return (
		<div
			className={styles.container}
		>
			<Search
				searchField={searchField}
				setSeachField={setSeachField}
			/>
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