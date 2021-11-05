import { showtimesApi } from 'api-client/showtimeApi';
import { Movie, ShowTimeGroupDate } from 'interfaces';
import moment from 'moment';
import React from 'react';
import { Card, ListGroup, Spinner } from 'react-bootstrap';
import { capitalize } from 'utils';
interface Props {
	movie?: Movie;
	onDateSelect: (date?: string) => void;
}

export const DateSelectCard = ({ movie, onDateSelect }: Props) => {
	const [showtimes, setShowtimes] = React.useState<Array<ShowTimeGroupDate>>();
	const [isLoading, setIsLoading] = React.useState(false);
	const [selectedDate, setSelectedDate] = React.useState<string>();

	React.useEffect(() => {
		setSelectedDate(undefined);
		if (movie) {
			setIsLoading(true);
			(async () => {
				try {
					const response = await showtimesApi.getShowtimesByMovie(movie.id as number);
					setShowtimes(response.data);
				} catch (error) {
					console.error('Failed to get showtime list:', error);
				}
				setIsLoading(false);
			})();
		} else {
			setShowtimes([]);
		}
	}, [movie]);

	const handleSelect = (showtimeKey?: string) => {
		if (showtimeKey === selectedDate) {
			setSelectedDate(undefined);
			onDateSelect(undefined);
		} else {
			setSelectedDate(showtimeKey);
			onDateSelect(showtimeKey);
		}
	};

	return (
		<Card>
			<Card.Body>
				<Card.Title>Chọn ngày</Card.Title>
				<ListGroup variant="flush">
					{isLoading ? (
						<Spinner animation="border" variant="primary" className="spinner" />
					) : (
						showtimes &&
						Object.keys(showtimes).map((showtimeKey: string, index) => (
							<ListGroup.Item
								key={index}
								onClick={() => handleSelect(showtimeKey)}
								className={`${selectedDate === showtimeKey ? 'selected' : ''}`}
							>
								{moment(showtimeKey).isSame(moment(), 'day') ? (
									<span>Hôm nay, {moment(showtimeKey).format('L')}</span>
								) : (
									<span>{capitalize(moment(showtimeKey).format('dddd, L'))}</span>
								)}
							</ListGroup.Item>
						))
					)}
				</ListGroup>
			</Card.Body>
		</Card>
	);
};
