import { LoginPayload, RegisterPayload } from 'interfaces';
import axiosClient from './axiosClient';

export const authApi = {
	login(payload: LoginPayload) {
		return axiosClient.post('/accounts/login', payload);
	},

	register(payload: RegisterPayload) {
		return axiosClient.post('/accounts/register', payload);
	},

	logout() {
		return axiosClient.post('/accounts/logout');
	},

	getProfile() {
		return axiosClient.get('/accounts/me');
	},
};
