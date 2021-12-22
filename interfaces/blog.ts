import { IBase, ImageUpload } from '.';
import { Category } from './category';
import { Employee } from './employee';
import { UploadFile } from './interface';

export interface Blog extends IBase {
	title: string;
    summary: string;
    views: number;
    date: Date;
    show: number;
    content: string;
    slug: string;
    background: ImageUpload[];
    // Request
    background_rq: (UploadFile<any> | number)[];
    category: Category;
    author: Employee;
}