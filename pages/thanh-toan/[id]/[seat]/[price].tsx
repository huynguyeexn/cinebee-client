import { showtimesApi } from 'api-client/showtimeApi';
import { CountExpire } from 'components/ThanhToan/countExpire';
import { Info } from 'components/ThanhToan/info';
import { Showtime } from 'interfaces';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import {
	Card,
	Col,
	Container,
	Form,
	Image,
	ListGroup,
	ListGroupItem,
	Modal,
	Row,
	Spinner,
} from 'react-bootstrap';

interface Props {}

const ThanhToanPage1 = (props: Props) => {
	const router = useRouter();
	const { id } = router.query;
	const { price } = router.query;
	const { seat } = router.query;

	const [showtime, setShowtime] = useState<Showtime>();
	const [seatSelected, setSeatSelected] = useState<number[]>([]);
	const [movieLoading, setMovieLoading] = React.useState(false);

	useEffect(() => {
		if (id) {
			(async () => {
				setMovieLoading(true);
				try {
					const response = await showtimesApi.getShowtimeById(Number(id));
					setShowtime(response as unknown as Showtime);
				} catch (error) {
					console.error('Failed to get showtime: ', error);
				}
				setMovieLoading(false);
			})();
		}
	}, [id]);

	return (
		<section
			className={`movie-detail ${
				movieLoading && 'd-flex justify-content-center align-items-center p-5'
			}`}
		>
			{movieLoading ? (
				<Spinner animation="border" variant="primary" />
			) : (
				showtime &&
				price &&
				seat && (
					<>
						<div>
							<Container className="py-4 w-75">
								<CountExpire showtime={showtime} price={price} seat={seat} />
								<Info showtime={showtime} price={price} seat={seats} />
							</Container>
						</div>
					</>
				)
			)}
		</section>
	);
};

export default ThanhToanPage1;
