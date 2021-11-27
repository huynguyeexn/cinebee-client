import { showtimesApi } from 'api-client/showtimeApi';
import { CountExpire } from 'components/ThanhToan/countExpire';
import { Info } from 'components/ThanhToan/info';
import { Showtime } from 'interfaces';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { Container, Spinner } from 'react-bootstrap';

interface Props {}

const ThanhToanPage = (props: Props) => {
	const { showtime_id, seats, price } =
		typeof window !== 'undefined' && JSON.parse(window.sessionStorage.getItem('orderTemp') || '{}');
	const [showtime, setShowtime] = useState<Showtime>();
	const [movieLoading, setMovieLoading] = React.useState(false);

	useEffect(() => {
		if (showtime_id) {
			(async () => {
				setMovieLoading(true);
				try {
					const response: Showtime = await showtimesApi.getShowtimeById(Number(showtime_id));
					setShowtime(response);
				} catch (error) {
					console.error('Failed to get showtime: ', error);
				}
				setMovieLoading(false);
			})();
		}
	}, [showtime_id]);

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
