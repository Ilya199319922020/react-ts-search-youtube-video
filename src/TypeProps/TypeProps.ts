import React, { ReactNode } from "react";
import { IFavorites } from "../models/Favorites";
import { IVideoCard } from "../models/VideoCard";

export interface ModalSaveProps {
	setIsModalSave: (a: boolean) => void;
}

export interface VideoListProps {
	videoList: IVideoCard[];
	searchField: string;
}

export interface VideoCardProps {
	snippet: IVideoCard;
	isActiveIcon: boolean;
}

export interface SearchFormProps {
	searchField: string;
	children: ReactNode;
	videoList: IVideoCard[];
	handleChangeSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
	handleSubmitSearch: (e: React.MouseEvent<HTMLElement>) => void;
	onModalSave: (e: React.MouseEvent<HTMLElement>) => void;
	setIsModalSave: (a: boolean) => void;
	isModalSave: boolean;
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
	favorite?: IFavorites | undefined;
	setIsModalSave?: any;
}

export interface FavoritesProp {

}
export interface RedirectProps {
	children: ReactNode;
}

export interface FavoriteElementProps {
	favorite: IFavorites
}

export interface Params {
	videolist: string;
	maxResult: string | number;
}
