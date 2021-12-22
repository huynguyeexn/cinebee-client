import { Movie } from 'interfaces';
import { useRouter } from 'next/router';
import React from 'react';
import { Col, Row, Tab } from 'react-bootstrap';
import { DateSelectCard, MovieSelectCard, TimeSelectCard } from '.';

interface Props {
	tabKey: string;
}

export const TabTheoNgay = ({ tabKey }: Props) => {
	const [movie, setMovie] = React.useState<Movie>();
	const [date, setDate] = React.useState<string>();

	const router = useRouter();
	const movieId = router.query.movie as string;
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

	return (
		<Tab.Pane eventKey={tabKey}>
			<Row>
				<Col lg={4}>
					<MovieSelectCard firstLoading onMovieSelect={handleMovieSelect} movieId={Number(movieId)} />
				</Col>
				<Col lg={4}>
					<DateSelectCard movie={movie} onDateSelect={handleDateSelect} />
				</Col>
				<Col lg={4}>
					<TimeSelectCard date={date} />
				</Col>
			</Row>
		</Tab.Pane>
	);
};
