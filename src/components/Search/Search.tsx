import React, { useEffect, useState, useMemo } from 'react';
import { SearchForm } from '../AuxiliaryComponent/SearchForm';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchVideo, openCloseModal, setValueCearchField } from '../../store/reducers/ActionCreatotrs';
import styles from '../../styles/Search.module.scss';
import stylesList from '../../styles/VideoList.module.scss';
import ModalVideo from '../Video/ModalVideo/ModalVideo';
import ModalForm from '../AuxiliaryComponent/ModalForm';
import { valuePropsModalForm } from '../../assets/valueProps/valueProps';
import { useSearchParams } from 'react-router-dom';
import RedirectComponent from '../../assets/hoc/RedirectComponent';

const Search = ({ }) => {
	const dispatch = useAppDispatch();
	const { videoList } = useAppSelector(state => state.videoSlice);
	const { isModal } = useAppSelector(state => state.favoritesSlice);
	const { searchField } = useAppSelector(state => state.favoritesSlice);
	const { favorites } = useAppSelector(state => state.favoritesSlice);
	const { nameToken } = useAppSelector(state => state.authReducer);
	const [isReq, setIsReq] = useState(false);
	const [searchParams, setSearchParams] = useSearchParams();

	const [isModalSave, setIsModalSave] = useState(false);
	
	const handleChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { value } = e.target;
		dispatch(setValueCearchField(value));
		setSearchParams({ videolist: value, maxResult: '12' });
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
		if (!searchField) {
			setSearchParams({});
		}
		if (isReq && searchField) {
			dispatch(fetchVideo({ name: searchField }));
			setIsReq(false);
		}
	}, [searchField, isReq]);
	useEffect(() => {
		if (favorites.length) {
			localStorage.setItem(`${nameToken}`, JSON.stringify({ nameToken, favorites }))
		}
	}, [favorites]);

	useEffect(() => {

		if (isModalSave) {
			const setTimerModal = setTimeout(() => setIsModalSave(false), 4000);
			return () => {
				clearTimeout(setTimerModal);
			}
		}
	}, [isModalSave]);

	const style = videoList.length ? stylesList : styles;

	return (
		<RedirectComponent>
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
					setIsModalSave={setIsModalSave}
					isModalSave={isModalSave}
				>
					Найти
				</SearchForm>
				{
					isModal &&
					<ModalVideo>
						<ModalForm
							videoList={videoList}
							valueField={searchField}
							setIsModalSave={setIsModalSave}
							{...valuePropsModalForm}
						/>
					</ModalVideo>
				}
			</main>
		</RedirectComponent>
	);
};

export default Search;