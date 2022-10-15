import React, { ReactNode } from "react";
import { IVideoCard } from "../models/VideoCard";

export interface SearchProps {
	searchField: string;
	setSeachField: (e: string) => void;
	videoList: IVideoCard[];
}

export interface VideoListProps {
	videoList: IVideoCard[];
	searchField: string;
}

export interface SearchFormProps {
	searchField: string;
	children: ReactNode;
	handleChangeSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
	handleSubmitSearch: (e: React.MouseEvent<HTMLElement>) => void;
}