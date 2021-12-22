import moment from 'moment';
import { string } from 'yup/lib/locale';

export const capitalize = (str: string) => {
	return str.charAt(0).toUpperCase() + str.slice(1);
};

export const minutesToHoursMinutes = (minutes: number): string => {
	return moment
		.utc(moment.duration(minutes, 'minutes').asMilliseconds())
		.format('H [giờ] mm [phút]');
};

export const formatDateWithDay = (datetime?: string): string => {
	if (!datetime) return '';
	return moment(datetime).isSame(moment(), 'day')
		? `Hôm nay, ${moment(datetime).format('L')}`
		: capitalize(moment(datetime).format('dddd, L'));
};

export const formatVND = (number?: number): string => {
	if (!number || number <= 0) return '0 đ';
	return new Intl.NumberFormat('vi-VI', { style: 'currency', currency: 'VND' }).format(number);
};

export const getRandomInt = (min: number, max: number): number => {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const getSession = (key: string): any => {
	return typeof window !== 'undefined' ? JSON.parse(window.sessionStorage.getItem(key) || '{}') : null;
}

export const setSession = (key: string, value: any) => {
	if(typeof value !== "string") value = JSON.stringify(value);
	typeof window !== 'undefined' && window.sessionStorage.setItem(key, value);
}

export const removeSession = (key: string) => {
	typeof window !== 'undefined' && window.sessionStorage.removeItem(key);
}

export const clearSession = () => {
	typeof window !== 'undefined' && window.sessionStorage.clear();
}

export const trailerLink = (link: string) => {
	// get youtube id
	const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
	const match = link.match(regExp);
	if (match && match[2].length === 11) {
		return `https://www.youtube.com/embed/${match[2]}`;
	}
	return '';
}