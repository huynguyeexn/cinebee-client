import { Customer, Order, ResponseData } from 'interfaces';
import axiosClient from './axiosClient';

const endpoint = '/comments';

export interface CommentPayload {
	comment_at: string;
	content: string;
	like: number;
	dislike: number;
	status: number;
	customer_id: number | string;
	movie_id: number | string ;
}

export const commentApi = {
	createComment: (data: CommentPayload): Promise<ResponseData<Comment>> => {
		return axiosClient.post(endpoint, data);
	},
};
