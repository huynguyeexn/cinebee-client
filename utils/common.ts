import { AGE_RATING } from 'constant';

export const getAgeRatingBadgeColor = (ageRating?: number): string => {
	if (!ageRating) return '';
	switch (AGE_RATING[ageRating].code.toLowerCase()) {
		case 'p':
			return 'success';
		case 'c13':
			return 'info';
		case 'c16':
			return 'warning';
		case 'c18':
			return 'danger';
		default:
			return '';
	}
};
