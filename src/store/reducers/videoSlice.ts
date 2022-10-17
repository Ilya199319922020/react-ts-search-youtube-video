import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { IVideoCard } from '../../models/VideoCard';
import { fetchListVideo } from './ActionCreatotrs';

interface VideoList {
	videoList: IVideoCard[];
	error: string;
	maxResult: number;
}

const initialState: VideoList = {
	videoList: [],
	error: '',
	maxResult: 12,
};

export const videoSlice = createSlice({
	name: 'video',
	initialState,
	reducers: {
	},
	extraReducers: {
		[fetchListVideo.fulfilled.type]: (state, action:  PayloadAction<IVideoCard[]>) => {
			state.videoList = action.payload

			state.error = ''
		},
	},
});

export default videoSlice.reducer;