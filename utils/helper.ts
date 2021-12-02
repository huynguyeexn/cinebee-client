import moment from 'moment';

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