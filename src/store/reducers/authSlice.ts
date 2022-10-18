import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../../models/User";

interface AuthState {
	user: IUser[];
	isAuth: boolean;
	error: string;
	nameToken: string;
};

const initialState: AuthState = {
	user: [],
	isAuth: false,
	error: '',
	nameToken: '',
};

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		authSuccess(state) {
			state.isAuth = true;
		},
		authUnSubscribe(state) {
			state.isAuth = false;
		},
		authAddNameToken(state, action: PayloadAction<string>) {
			state.nameToken = action.payload;
		},
		authFetchingError(state, action: PayloadAction<string>) {
			state.isAuth = false;
			state.error = action.payload;
		},
	}
});

export default authSlice.reducer;