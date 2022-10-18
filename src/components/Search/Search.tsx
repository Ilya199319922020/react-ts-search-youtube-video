import React, { useEffect, useState } from 'react';
import { SearchForm } from '../AuxiliaryComponent/SearchForm';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchListVideo, addReqValueFavorites, openCloseModal, setValueCearchField } from '../../store/reducers/ActionCreatotrs';
import styles from '../../styles/Search.module.scss';
import stylesList from '../../styles/VideoList.module.scss';
import ModalVideo from '../Video/ModalVideo/ModalVideo';
import ModalForm from '../AuxiliaryComponent/ModalForm';
import { valuePropsModalForm } from '../../assets/valueProps/valueProps';
import { SearchProps } from '../../TypeProps/TypeProps';
import { useSearchParams } from 'react-router-dom';

const Search: React.FC<SearchProps> = ({ }) => {
	const dispatch = useAppDispatch();
	const { videoList } = useAppSelector(state => state.videoSlice);
	const { isModal } = useAppSelector(state => state.favoritesSlice);
	const { searchField } = useAppSelector(state => state.favoritesSlice);
	const { favorites } = useAppSelector(state => state.favoritesSlice);
	const [isReq, setIsReq] = useState(false);

	const [searchParams, setSearchParams] = useSearchParams();

	const handleChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
		e.preventDefault();
		const { value } = e.target;
		dispatch(setValueCearchField(value));
		setSearchParams({ videolist: value, maxResult: '12' })
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
			dispatch(fetchListVideo({ name: searchField }));
			setIsReq(false);
		}
	}, [isReq]);

	useEffect(() => {
		const tokenLogin: any = localStorage.getItem("loginToken");
		const objLoginToken = JSON.parse(tokenLogin)
		if (favorites.length && objLoginToken.isUser) {
			localStorage.setItem('loginToken', JSON.stringify({ key: objLoginToken.key, isUser: true, stateFavorite: [] }))
		}
	}, [favorites])

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
						videoList={videoList}
						valueField={searchField}
						{...valuePropsModalForm}
					/>
				</ModalVideo>

			}
		</main>
	);
};

export default Search;