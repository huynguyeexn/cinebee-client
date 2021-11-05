import moment from 'moment';

export const capitalize = (str: string) => {
	return str.charAt(0).toUpperCase() + str.slice(1);
};

export const minutesToHoursMinutes = (minutes: number): string => {
	return moment
		.utc(moment.duration(minutes, 'minutes').asMilliseconds())
		.format('H [giờ] mm [phút]');
};
