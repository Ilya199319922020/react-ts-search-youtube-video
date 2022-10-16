import React, { useEffect, useState } from 'react';
import { SearchForm } from '../AuxiliaryComponent/SearchForm';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchListVideo, addReqValueFavorites, openCloseModal } from '../../store/reducers/ActionCreatotrs';
import styles from '../../styles/Search.module.scss';
import stylesList from '../../styles/VideoList.module.scss';
import { SearchProps } from '../../TypeProps/TypeProps';
import ModalVideo from '../Video/ModalVideo/ModalVideo';
import ModalForm from '../AuxiliaryComponent/ModalForm';
import { valuePropsModalForm } from '../../assets/valueProps/valueProps';

const Search: React.FC<SearchProps> = ({ searchField, setSeachField, videoList }) => {
	const dispatch = useAppDispatch();
	const { isModal } = useAppSelector(state => state.favoritesSlice);
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

	const onModalSave = (e: React.MouseEvent<HTMLElement>) => {
		e.preventDefault();
		dispatch(openCloseModal(!isModal));
	};

	useEffect(() => {
		if (isReq && searchField) {
			dispatch(fetchListVideo(searchField));
			setIsReq(false);
		}
	}, [isReq]);

	const style = videoList.length ? stylesList : styles;

	return (
		<main
			className={style.main}
		>
			<h2
				className={style.main__title}
			>
				Поиск видео
			</h2>
			<SearchForm
				searchField={searchField}
				handleChangeSearch={handleChangeSearch}
				handleSubmitSearch={handleSubmitSearch}
				onModalSave={onModalSave}
				videoList={videoList}
			>
				Найти
			</SearchForm>
			{
				isModal &&
				<ModalVideo>
					<ModalForm
					valueField={searchField}
						{...valuePropsModalForm}
					/>
				</ModalVideo>

			}
		</main>
	);
};

export default Search;