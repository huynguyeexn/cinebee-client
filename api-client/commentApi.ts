import { ResponseData, Comment } from 'interfaces';
import axiosClient from './axiosClient';

const endpoint = '/comments';

export interface CommentPayload {
	content: string;
	movie_id: number | string ;
}

export const commentApi = {
	createComment: (data: CommentPayload): Promise<ResponseData<Comment>> => {
		return axiosClient.post(endpoint, data);
	},
};
