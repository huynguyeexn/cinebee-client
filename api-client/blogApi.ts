import { ListParams, ListResponse, Blog } from 'interfaces';
import axiosClient from './axiosClient';

const endpoint = '/blogs';

export const blogApi = {
	getAllBlog: () => {
		return axiosClient.get(endpoint);
	},
	getBlogs: (params: ListParams): Promise<ListResponse<Blog>> => {
		return axiosClient.get(endpoint + `/?page=${params.page}&per_page=${params.per_page}`);
	},
	getById: (id: string | string[]) => {
		return axiosClient.get(endpoint + `/${id}`);
	},
};
