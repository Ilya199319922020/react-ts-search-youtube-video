import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { IVideoCard } from '../../models/VideoCard';

interface VideoList {
	videoList: IVideoCard[];
	error: string;
	maxResult: number;
	totalResults: number | null,
}

const initialState: VideoList = {
	videoList: [],
	error: '',
	maxResult: 12,
	totalResults: null,
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
		addTotalResults(state, action: PayloadAction<number>) {
			state.totalResults = action.payload;
		},
	},
});

export default videoSlice.reducer;