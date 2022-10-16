import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { IFavorites } from '../../models/Favorites';

interface Favorites {
	favorites: IFavorites[];
	error: string;
	isModal: boolean;
}

const initialState: Favorites = {
	favorites: [],
	error: '',
	isModal: false,
};

export const favoritesSlice = createSlice({
	name: 'favorites',
	initialState,
	reducers: {
		addReqValue(state, action: PayloadAction<IFavorites>) {
			state.favorites = [...state.favorites, action.payload];
		},
		openModal(state, action: PayloadAction<boolean>) {
			state.isModal = action.payload
		},
		favoritesError(state, action: PayloadAction<string>) {
			state.error = action.payload;
		},
	},
});

export default favoritesSlice.reducer;