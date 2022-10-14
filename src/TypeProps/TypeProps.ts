import { IVideoCard } from "../models/VideoCard";

export interface SearchProps {
	searchField: string;
	setSeachField: (e: string) => void;
}

export interface VideoListProps {
	videoList: IVideoCard[];
	searchField: string;
}