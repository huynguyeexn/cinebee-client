import moment from 'moment';
import axiosClient from './axiosClient';

const endpoint = '/movies';

export const movieApi = {
	getById: (id: string | string[]) => {
		return axiosClient.get(endpoint + `/${id}`);
	},

	getMovieByGenres: (id: number) => {
		return axiosClient.get(endpoint + `/${id}/genres`);
	},

	getMovieByDirectors: (id: number) => {
		return axiosClient.get(endpoint + `/${id}/directors`);
	},

	getMovieByActors: (id: number) => {
		return axiosClient.get(endpoint + `/${id}/actors`);
	},

	getMovie: () => {
		return axiosClient.get(endpoint);
	},

	getMoviesComing: (limit: number = 10) => {
		return axiosClient.get(endpoint + `/?filter=2&filter_by=status&per_page=${limit}`);
	},

	getMoviesPlaying: (limit: number = 10) => {
		return axiosClient.get(endpoint + `/?filter=1&filter_by=status&per_page=${limit}`);
	},
};
