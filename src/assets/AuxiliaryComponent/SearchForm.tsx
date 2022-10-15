import React from 'react';
import { SearchFormProps } from '../../TypeProps/TypeProps';
//import styles from '../../styles/Search.module.scss';
import styles from '../../styles/VideoList.module.scss';

export const SearchForm: React.FC<SearchFormProps> = ({
	children,  searchField,  
	handleChangeSearch, handleSubmitSearch
}) => {
	return (
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
					{children}
				</button>
			</label>
		</form>
	);
};