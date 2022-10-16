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
	valueField:string;
	headerName: string;
	title: string;
	req: string;
	sortName: string;
	value: number;
	noBtnName: string;
	btnName: string;
}
