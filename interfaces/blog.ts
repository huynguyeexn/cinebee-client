import { IBase } from '.';

export interface Blog extends IBase {
    category_id: any;
	category: string;
	title: string;
	summary: string;
    content: string;
    date: string;
    img: string;
    avatar: string;
    employee_id: number;
    total: string;
}