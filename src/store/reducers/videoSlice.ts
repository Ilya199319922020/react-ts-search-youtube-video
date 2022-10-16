import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { IVideoCard } from '../../models/VideoCard';
import { fetchListVideo } from './ActionCreatotrs';

interface VideoList {
	videoList: IVideoCard[];
	error: string;
}

const initialState: VideoList = {
	videoList: [],
	error: '',
};

export const videoSlice = createSlice({
	name: 'video',
	initialState,
	reducers: {
	},
	extraReducers: {
		[fetchListVideo.fulfilled.type]: (state, action: PayloadAction<IVideoCard[]>) => {
			state.videoList = action.payload;
			state.error = ''
		},
	},
});

export default videoSlice.reducer;