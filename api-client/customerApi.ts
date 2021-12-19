import axiosClient from './axiosClient';

const endpoint = '/customers';

export const customerApi = {
    getAllOrderById: (id: number) => {
        return axiosClient.get(endpoint + `/${id}/order`)
    }
};