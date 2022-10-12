import React from 'react';
import styles from '../styles/Container.module.scss';
import Header from './Header/Header';
import Main from './Main/Main';

const Container = () => {
	return (
		<div
			className={styles.container}
		>
			<Header/>
			<Main/>
		</div>
	);
};

export default Container;