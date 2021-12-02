import { Showtime } from 'interfaces';
import moment from 'moment';
import axiosClient from './axiosClient';
const endpoint = '/showtimes';

export const showtimesApi = {
	getShowtimesByDate: (date: string, movie_id: number) => {
		return axiosClient.get(endpoint + `/date/${moment(new Date(date)).format()}/movie/${movie_id}`);
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
	getShowtimeById: (id: number): Promise<Showtime> => {
		return axiosClient.get(endpoint + `/${id}`);
	},
};
