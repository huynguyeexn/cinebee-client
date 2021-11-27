import axiosClient from './axiosClient';

const endpoint = '/payments';

export interface PaymentPayload {
	amount: string;
	bank_code: string;
	order_code: string;
}

export const paymentApi = {
	createPayment: (data: PaymentPayload) => {
		return axiosClient.post(endpoint + `/online`, data);
	},
};
