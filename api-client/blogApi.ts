import moment from 'moment';
import axiosClient from './axiosClient';

const endpoint = '/blog';

export const blogApi = {
	getblog: () => {
		return axiosClient.get(endpoint);
	},
};
