import React, { useEffect, useState } from 'react';
import { useAppDispatch } from '../../hooks/redux';
import { fetchListVideo } from '../../store/reducers/ActionCreatotrs';
import styles from '../../styles/Search.module.scss';
import { SearchProps } from '../../TypeProps/TypeProps';

const Search: React.FC<SearchProps> = ({ searchField, setSeachField }) => {
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
				className={styles.main__header}
			>
				Поиск видео
			</h2>
			<form
				className={styles.main__form}
			>
				<input
					className={styles.main__form_input}
					placeholder={'   Что хотите посмотреть?'}
					type={'text'}
					value={searchField}
					onChange={handleChangeSearch}
				/>
				<label
					className={styles.main__form_label}
				>
					<button
						onClick={handleSubmitSearch}
					>
						Найти
					</button>
				</label>
			</form>
		</main>
	);
};

export default Search;