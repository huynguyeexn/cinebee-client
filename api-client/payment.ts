import axiosClient from './axiosClient';

const endpoint = '/payments';

export interface PaymentPayload {
	amount: number;
	bank_code: string;
	order_code: number;
}

export const paymentApi = {
	createPayment: (data: PaymentPayload) => {
		return axiosClient.post(endpoint + `/online`, data);
	},
};
