import { LoginPayload } from 'interfaces';
import axiosClient from './axiosClient';

export const authApi = {
	login(payload: LoginPayload) {
		return axiosClient.post('/accounts/login', payload);
	},

	logout() {
		return axiosClient.post('/accounts/logout');
	},

	getProfile() {
		return axiosClient.get('/accounts/me');
	},
};
