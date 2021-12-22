import { Customer, IBase } from '.';

export interface Comment extends IBase {
	comment_at: string;
	content: string;
	like: number;
	dislike: number;
	status: number;
	customer_id: number | string;
	movie_id: number | string ;
	customer: Customer;
}