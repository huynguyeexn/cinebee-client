import { showtimesApi } from 'api-client/showtimeApi';
import { CountExpire } from 'components/ThanhToan/countExpire';
import { Info } from 'components/ThanhToan/info';
import { Showtime } from 'interfaces';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { Container, Spinner } from 'react-bootstrap';

interface Props {}

const ThanhToanPage = (props: Props) => {
	const router = useRouter();
	const { showtime: id, seats: seatsStr } = router.query;
	const [showtime, setShowtime] = useState<Showtime>();
	const [seats, setSeats] = useState<number[]>();
	const [price, setPrice] = useState<number>();
	const [movieLoading, setMovieLoading] = React.useState(false);

	useEffect(() => {
		if (id) {
			(async () => {
				setMovieLoading(true);
				try {
					const seatArr: number[] = (seatsStr as string).split(',').map(Number);
					const response: Showtime = await showtimesApi.getShowtimeById(Number(id));
					setShowtime(response);
					setPrice(response.room.price as number);
					setSeats(seatArr);
				} catch (error) {
					console.error('Failed to get showtime: ', error);
				}
				setMovieLoading(false);
			})();
		}
	}, [id, seatsStr]);

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
				seats && (
					<>
						<div>
							<Container className="py-4 w-75">
								<CountExpire showtime={showtime} price={price} seats={seats} />
								<Info showtime={showtime} price={price} seats={seats} />
							</Container>
						</div>
					</>
				)
			)}
		</section>
	);
};

export default ThanhToanPage;
