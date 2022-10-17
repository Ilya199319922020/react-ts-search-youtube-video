import React, { ReactNode } from "react";
import { IFavorites } from "../models/Favorites";
import { IVideoCard } from "../models/VideoCard";

export interface SearchProps {
	//searchField: string;
	//setSeachField: (e: string) => void;
}

export interface VideoListProps {
	videoList: IVideoCard[];
	searchField: string;
}

export interface SearchFormProps {
	searchField: string;
	children: ReactNode;
	videoList: IVideoCard[];
	handleChangeSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
	handleSubmitSearch: (e: React.MouseEvent<HTMLElement>) => void;
	onModalSave: (e: React.MouseEvent<HTMLElement>) => void;
}

export interface HeaderProps {
	isSearchPage: boolean;
	setIsSearchPage: (a: boolean) => void;
}

export interface ModalVideoProps {
	children: ReactNode;
}

export interface ModalFormProps {
	valueField?: string;
	headerName: string;
	title: string;
	req: string;
	noBtnName: string;
	btnName: string;
	videoList?: IVideoCard[];
	favorite?:IFavorites | undefined;
}

export interface FavoritesProp {

}

export interface FavoriteElementProps {
	favorite: IFavorites
}

export interface Params {
	videolist: string; 
	maxResult: string | number;
}
