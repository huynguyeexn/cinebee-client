import axiosClient from './axiosClient';

const endpoint = '/seats';

export const seatApi = {
	getById: (id: string | string[] ) => {
		return axiosClient.get(endpoint + `/${id}`);
	},
};