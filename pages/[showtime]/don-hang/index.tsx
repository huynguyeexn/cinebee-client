import { showtimesApi } from 'api-client/showtimeApi';
import { CountExpire } from 'components/ThanhToan/countExpire';
import { Info } from 'components/ThanhToan/info';
import { Order, Showtime } from 'interfaces';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { Container, Spinner } from 'react-bootstrap';

const ThanhToanPage = () => {
	const router = useRouter();
	const { showtime: id } = router.query;
	const [showtime, setShowtime] = useState<Showtime>();
	const [movieLoading, setMovieLoading] = React.useState(false);

	//
	const seats =
		typeof window !== 'undefined' &&
		JSON.parse(window.sessionStorage.getItem('seatSelected') || '[]');
	const { id: order_code }: Order =
		typeof window !== 'undefined' && JSON.parse(window.sessionStorage.getItem('order') || '{}');

	if(typeof window !== 'undefined') {
		if(!seats.length ) {
			router.push('/');
			window.sessionStorage.clear();
		}
	}

	useEffect(() => {
		if (id) {
			(async () => {
				setMovieLoading(true);
				try {
					const response: Showtime = await showtimesApi.getShowtimeById(Number(id));
					setShowtime(response);
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
				seats.length &&
				showtime && (
					<div>
						<Container className="py-4 w-75">
							<CountExpire showtime={showtime} seats={seats} />
							<Info showtime={showtime} seats={seats} />
						</Container>
					</div>
				)
			)}
		</section>
	);
};

export async function getServerSideProps() {
	return {
		props: {},
	};
}
export default ThanhToanPage;
