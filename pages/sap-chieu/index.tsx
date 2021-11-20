import { MovieCard, PageTitle } from 'components';
import React from 'react';
import { Col, Container, Row, Spinner } from 'react-bootstrap';
import { Movie } from 'interfaces';
import { movieApi } from 'api-client/movieApi';

interface Props {}

const SapChieuPage = (props: Props) => {
	const [movies, setMovies] = React.useState<Movie[]>([]);
	const [movieLoading, setMovieLoading] = React.useState(false);

	React.useEffect(() => {
		(async () => {
			setMovieLoading(true);
			try {
				const MoviePlaying = await movieApi.getMoviesComing(100);
				setMovies(MoviePlaying.data as Movie[]);
			} catch (error) {
				console.error('Failed to get movies playing: ', error);
			}
			setMovieLoading(false);
		})();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	return (
		<Container className="py-4">
			<PageTitle title="Phim sắp chiếu" moreLabel="Phim đang chiếu" moreUrl="/dang-chieu" />
			{movieLoading ? (
				<Spinner animation="border" variant="primary" />
			) : (
				<Row xs={2} md={3} lg={4} xl={5}>
					{movies &&
						movies.map((movie, idx) => (
							<Col key={idx}>
								<MovieCard movie={movie} />
							</Col>
						))}
				</Row>
			)}
		</Container>
	);
};

export default SapChieuPage;
