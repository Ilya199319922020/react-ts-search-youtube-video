import React from 'react';
import { SearchFormProps } from '../../TypeProps/TypeProps';
import styles from '../../styles/Search.module.scss';
import stylesList from '../../styles/VideoList.module.scss';
import ModalSave from '../Video/ModalVideo/ModalSave';

export const SearchForm: React.FC<SearchFormProps> = ({
	children, searchField, videoList, isModalSave, onModalSave,
	handleChangeSearch, handleSubmitSearch, setIsModalSave
}) => {
	const style = videoList.length ? stylesList : styles;
	return (
		<form
			className={style.main__form}
		>
			<input
				className={style.main__form_input}
				placeholder={'Что хотите посмотреть?'}
				type={'text'}
				value={searchField}
				onChange={handleChangeSearch}
			/>
			{
				videoList.length > 0
				&&
				<button
					className={style.main__form_iconBtn}
					onClick={onModalSave}
				>
					<span
						className={style.main__form_iconBtnLike}
					></span>
				</button>
			}
			{
				isModalSave
				&&
				<ModalSave
					setIsModalSave={setIsModalSave}
				/>
			}
			<label
				className={style.main__form_label}
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