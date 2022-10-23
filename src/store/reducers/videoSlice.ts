import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { IVideoCard } from '../../models/VideoCard';

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
		fetchListVideo(state, action: PayloadAction<IVideoCard[]>) {
			state.videoList = action.payload;
			state.error = '';
		},
		removeStateVideo(state) {
			state.videoList = [];
		},
		videoError(state, action: PayloadAction<string>) {
			state.error = action.payload;
		},
	},
});

export default videoSlice.reducer;