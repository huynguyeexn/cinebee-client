import { NextPage } from 'next';
import { AppProps } from 'next/app';
import { ReactElement, ReactNode } from 'react';

export interface LayoutProps {
	children: ReactNode;
}

export type NextPageWithLayout = NextPage & {
	Layout?: (props: LayoutProps) => ReactElement;
};

export type AppPropsWithLayout = AppProps & {
	Component: NextPageWithLayout;
};

export interface ListResponse<T> {
	data: T[];
	pagination: PaginationParams;
}

export interface PaginationParams {
	total: number;
	query?: string | null;
	last_page: number;
	page: number;
	per_page: number;
	sort_by: string;
	sort_type: 'desc' | 'asc';
}
export interface UploadFile<T = any> {
	uid: string;
	size?: number;
	name: string;
	fileName?: string;
	lastModified?: number;
	lastModifiedDate?: Date;
	url?: string;
	percent?: number;
	thumbUrl?: string;
	response?: T;
	error?: any;
	linkProps?: any;
	type?: string;
	xhr?: T;
	preview?: string;
}
export interface ImageUpload extends UploadFile<any> {
	id: string | number;
	file_name: string;
	type: string;
	alt: string;
	folder: string;
}

export interface ResponseData<T> {
	message: string;
	data: T;
}

export interface ListParams {
	page?: number;
	per_page?: number;
	sort_by?: string;
	sort_type?: 'desc' | 'asc';
	q?: string | null;
	search?: string;
	filter?: string;
	filter_by?: string;
}

