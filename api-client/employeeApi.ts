import axiosClient from './axiosClient';

const endpoint = '/employee';

export const employeeApi = {
    getById: (id: number) => {
        return axiosClient.get(endpoint + `/${id}`)
    }
};