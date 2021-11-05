import moment from 'moment';
import axiosClient from './axiosClient';
const endpoint = '/showtimes';

export const showtimesApi = {
	getShowtimesByDate: (date: string) => {
		return axiosClient.get(endpoint + '/date/' + moment(new Date(date)).format());
	},
	getShowtimesLatest: () => {
		return axiosClient.get(endpoint + '/latest');
	},
	getShowtimesMovies: () => {
		return axiosClient.get(endpoint + '/movie-playing');
	},
	getShowtimesByMovie: (id: number) => {
		return axiosClient.get(endpoint + `/movie/${id}`);
	},
};
