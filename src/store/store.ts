import { combineReducers, configureStore } from '@reduxjs/toolkit';
import authReducer from './reducers/authSlice';
import videoSlice from './reducers/videoSlice';
import favoritesSlice from './reducers/favoritesSlice';

const rootReducer = combineReducers({
authReducer,
videoSlice,
favoritesSlice
});

export const setupStore = () => {
	return configureStore({
		 reducer: rootReducer,
		 	})
};

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']