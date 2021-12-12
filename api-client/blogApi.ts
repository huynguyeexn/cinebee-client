import moment from 'moment';
import axiosClient from './axiosClient';

const endpoint = '/blogs';
const category =  '/categories/all';
const employee = '/employee/all';
export const blogApi = {
	getblog: (param: any) => {
		const str = `?page=${param.page}
		&per_page=${param.per_page}&sort_type=${param.sort_type}&sort_by=${param.sort_by}`;
		return axiosClient.get(endpoint+str);
	},
	getCategory: ()=>{
		return axiosClient.get(category);
	},
	getEmployee: ()=>{
		return axiosClient.get(employee);
	},
	getBLogById: (id: number) => {
		return axiosClient.get(endpoint + `/${id}`);
	},
};
