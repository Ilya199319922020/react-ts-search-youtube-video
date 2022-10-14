import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../../models/User";

interface AuthState {
	user: IUser[];
	isAuth: boolean;
		error: string;
};

const initialState: AuthState = {
	user: [],
	isAuth: false,
	error: '',
};

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		authSuccess(state) {
			state.isAuth = true;
		},
		authFetchingError(state, action: PayloadAction<string>) {
			state.isAuth = false;
			state.error = action.payload;
		},
	}
});

export default authSlice.reducer;