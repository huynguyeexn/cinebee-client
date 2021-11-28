import { IBase } from '.';

export interface Blog extends IBase {
	category: string;
	title: string;
	summary: string;
    date: string;
    img: string;
    avatar: string;
    user_name: string;
    total: string;
}