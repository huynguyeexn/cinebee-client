import { Order, ResponseData } from 'interfaces';
import axiosClient from './axiosClient';

const endpoint = '/customers';

export const customerApi = {
    getAllOrderById: (id: number): Promise<ResponseData<Order[]>> => {
        return axiosClient.get(endpoint + `/${id}/order`)
    }
};