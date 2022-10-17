import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { IFavorites } from '../../models/Favorites';

interface Favorites {
	favorites: IFavorites[];
	error: string;
	isModal: boolean;
	searchField: string;
}

const initialState: Favorites = {
	favorites: [],
	error: '',
	isModal: false,
	searchField: '',
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
		updateReqValue(state, action: PayloadAction<IFavorites>) {

			state.favorites = [...state.favorites
				.map(element => {
					if(element.id = action.payload.id){
						return action.payload;
					}
				return element;
				})]
		},
		favoritesError(state, action: PayloadAction<string>) {
			state.error = action.payload;
		},
		setSeachField(state, action: PayloadAction<string>){
			state.searchField = action.payload;
		}
	},
});

export default favoritesSlice.reducer;