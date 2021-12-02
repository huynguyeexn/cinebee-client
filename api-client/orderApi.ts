import { Order, ResponseData } from 'interfaces';
import axiosClient from './axiosClient';

const endpoint = '/orders';

export interface OrderPayload {
	seats: number[];
	showtime_id: number;
}

export const orderApi = {
	createOrder: (data: OrderPayload): Promise<ResponseData<Order>> => {
		return axiosClient.post(endpoint, data);
	},
	confirmOrder: (orderId: number): Promise<ResponseData<Order>> => {
		return axiosClient.post(`${endpoint}/${orderId}/confirm`);
	}
};
