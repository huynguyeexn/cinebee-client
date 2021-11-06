import { showtimesApi } from 'api-client/showtimeApi';
import { Movie, Showtime } from 'interfaces';
import moment from 'moment';
import Image from 'next/image';
import React from 'react';
import { Badge, Card, ListGroup, Spinner, Table } from 'react-bootstrap';

interface Props {
	date?: string;
	movie?: Movie;
	onTimeSelect?: (showtime?: Showtime) => void;
}

export const TimeSelectCard = ({ date, movie, onTimeSelect }: Props) => {
	const [time, setTime] = React.useState<Showtime[]>([]);
	const [isLoading, setIsLoading] = React.useState<boolean>(false);
	const [selectedTime, setSelectedTime] = React.useState<number>();

	React.useEffect(() => {
		setTime([]);
		setSelectedTime(undefined);
		if (date && movie) {
			setIsLoading(true);
			(async () => {
				try {
					const response = await showtimesApi.getShowtimesByDate(date, movie.id);
					setTime(response.data);
				} catch (error) {
					console.error('Failed to get showtime list:', error);
				}
				setIsLoading(false);
			})();
		}
	}, [date, movie]);

	const handleSelect = (showtime?: Showtime) => {
		if (showtime && onTimeSelect) {
			setSelectedTime(showtime.id as number);
			onTimeSelect(showtime);
		}
	};

	return (
		<Card>
			<Card.Body>
				<Card.Title>Chọn xuất chiếu</Card.Title>
				<ListGroup variant="flush">
					{isLoading ? (
						<Spinner animation="border" variant="primary" />
					) : (
						time.map((showtime, index) => (
							<ListGroup.Item
								key={showtime.id}
								onClick={() => handleSelect(showtime)}
								className={`${showtime.id === selectedTime ? 'selected' : ''}`}
							>
								<Table striped bordered hover size="sm" className="showtime-time-table">
									<tr>
										<td>{moment(showtime.start).format('HH:mm')}</td>
										<td>{showtime.room.price} VNĐ</td>
									</tr>
								</Table>
							</ListGroup.Item>
						))
					)}
				</ListGroup>
			</Card.Body>
		</Card>
	);
};
