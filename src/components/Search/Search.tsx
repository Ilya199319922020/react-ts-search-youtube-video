import React, { useEffect, useState } from 'react';
import { SearchForm } from '../../assets/AuxiliaryComponent/SearchForm';
import { useAppDispatch } from '../../hooks/redux';
import { fetchListVideo } from '../../store/reducers/ActionCreatotrs';
// import styles from '../../styles/Search.module.scss';
import styles from '../../styles/VideoList.module.scss';
import { SearchProps } from '../../TypeProps/TypeProps';

const Search: React.FC<SearchProps> = ({ searchField, setSeachField, videoList }) => {
	const dispatch = useAppDispatch();
	const [isReq, setIsReq] = useState(false);

	const handleChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
		e.preventDefault();
		const { value } = e.target;
		setSeachField(value);
	};
	const handleSubmitSearch = (e: React.MouseEvent<HTMLElement>) => {
		e.preventDefault();
		setIsReq(true);
	};

	useEffect(() => {
		if (isReq && searchField) {
			dispatch(fetchListVideo(searchField));
			setIsReq(false);
		}
	}, [isReq]);

	return (
		<main
			className={styles.main}
		>
			<h2
				className={styles.main__title}
			>
				Поиск видео
			</h2>
			<SearchForm
				searchField={searchField}
				handleChangeSearch={handleChangeSearch}
				handleSubmitSearch={handleSubmitSearch}
			>
				Найти
			</SearchForm>
		</main>
	);
};

export default Search;