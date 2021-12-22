import { Movie, Showtime } from 'interfaces';
import { useRouter } from 'next/router';
import React from 'react';
import { Button, Col, Row, Tab } from 'react-bootstrap';
import { DateSelectCard, MovieSelectCard, TimeSelectCard } from '.';

interface Props {
	tabKey: string;
}

export const TabTheoPhim = ({ tabKey }: Props) => {
	const [movie, setMovie] = React.useState<Movie>();
	const [date, setDate] = React.useState<string>();
	const [time, setTime] = React.useState<number>();

	const router = useRouter();

	const handleMovieSelect = (movie?: Movie) => {
		if (!movie) {
			setMovie(undefined);
			setDate(undefined);
		} else {
			setMovie(movie);
		}
	};

	const handleDateSelect = (date?: string) => {
		if (!date) {
			setDate(undefined);
		} else {
			setDate(date);
		}
	};

	const handleTimeSelect = (showtime?: Showtime) => {
		if (!showtime) {
			setTime(undefined);
		} else {
			setTime(showtime.id as number);
		}
	};

	const handleDatVeClick = () => {
		if (movie && date && time) {
			router.push(`//chon-ghe`, `/${time}/chon-ghe`);
		}
	};

	return (
		<Tab.Pane eventKey={tabKey}>
			<Row>
				<Col lg={4}>
					<MovieSelectCard firstLoading onMovieSelect={handleMovieSelect} />
				</Col>
				<Col lg={4}>
					<DateSelectCard movie={movie} onDateSelect={handleDateSelect} />
				</Col>
				<Col lg={4}>
					<TimeSelectCard date={date} movie={movie} onTimeSelect={handleTimeSelect} />
					<Row className="mb-2 text-right">
						<Col xs={12}>
							<Button
								disabled={!time}
								variant="primary"
								block
								className="mt-2"
								onClick={handleDatVeClick}
							>
								{time ? 'Đặt vé' : 'Hãy chọn xuất chiếu'}
							</Button>
						</Col>
					</Row>
				</Col>
			</Row>
		</Tab.Pane>
	);
};
