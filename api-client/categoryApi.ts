import axiosClient from './axiosClient';

const endpoint = '/categories';

export const categoryApi = {
	getCategory: () => {
        return axiosClient.get(endpoint)
    },
    getById: (id: number) => {
        return axiosClient.get(endpoint + `/${id}`)
    },
    getBlogByCategory: (id:number) => {
        return axiosClient.get(endpoint + `/${id}/blogs`)
    }
};