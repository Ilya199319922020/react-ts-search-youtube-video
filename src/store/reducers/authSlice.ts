import { createSlice } from "@reduxjs/toolkit";
import { IUser } from "../../models/User";

interface AuthState  {
	user: IUser[];
	isAuth: boolean;
	isLoading: boolean;
	error: string;
};

const initialState: AuthState = {
	user: [],
	isAuth: false,
	isLoading: false,
	error: '',
};

export const authSlice = createSlice ({
	name: 'auth',
	initialState,
	reducers: {
  
	}
});

export default authSlice.reducer;