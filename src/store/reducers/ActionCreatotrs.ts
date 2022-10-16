import axios from 'axios';
import { createAsyncThunk } from "@reduxjs/toolkit";
import { AppDispatch } from "../store";
import { authSlice } from './authSlice';
import { IFavorites } from '../../models/Favorites';
import { favoritesSlice } from './favoritesSlice';

export const setAuth = (error?: any) => async (dispatch: AppDispatch) => {
	try {
		if (!error) {
			dispatch(authSlice.actions.authSuccess())
		} else {
			dispatch(authSlice.actions.authFetchingError(error))
		}
	} catch (e: any) {
		dispatch(authSlice.actions.authFetchingError(e.message))
	}
};

export const fetchListVideo = createAsyncThunk(
	'search/video',
	async (name: string, thunkApi) => {
		try {
			const response = await axios
				.get(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyAV9a9kZtwKibDxbD1xV0CkiDawpzYY8ww&maxResults=${12}&q=${name}`);
			const { items } = response.data;
			return items;
		} catch (e) {
			return thunkApi.rejectWithValue('Не удалось загрузить данные')
		}
	}
);

export const addReqValueFavorites = (value: IFavorites) => async (dispatch: AppDispatch) => {
	try {
		dispatch(favoritesSlice.actions.addReqValue(value))
	}
	catch (e: any) {
		dispatch(favoritesSlice.actions.favoritesError(e.message))
	}
};

export const openCloseModal = (isModal: boolean) => async (dispatch: AppDispatch) => {
	try {
		dispatch(favoritesSlice.actions.openModal(isModal))
	}
	catch (e: any) {
		dispatch(favoritesSlice.actions.favoritesError(e.message))
	}
};