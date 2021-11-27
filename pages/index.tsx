// CSS
import { movieApi } from 'api-client/movieApi';
import { BannerHeader, MovieCard, PageTitle } from 'components';
import { Movie } from 'interfaces';
import type { NextPage } from 'next';
import React from 'react';
import { Col, Container, Row, Spinner } from 'react-bootstrap';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

const Home: NextPage = () => {
	const [movies, setMovies] = React.useState<Movie[]>([]);
	const [comingSoon, setComingSoon] = React.useState<Movie[]>([]);
	const [movieLoading, setMovieLoading] = React.useState(false);
	const [comingSoonLoading, setComingSoonLoading] = React.useState(false);

	React.useEffect(() => {
		(async () => {
			setMovieLoading(true);
			setComingSoonLoading(true);
			try {
				const MovieComing = await movieApi.getMoviesComing(10);
				const MoviePlaying = await movieApi.getMoviesPlaying(10);
				setComingSoon(MovieComing.data as Movie[]);
				setMovies(MoviePlaying.data as Movie[]);
			} catch (error) {
				console.error('Failed to get movies playing: ', error);
			}
			setMovieLoading(false);
			setComingSoonLoading(false);
		})();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<>
			<section className="mb-5">
				<BannerHeader />
			</section>
			<Container>
				<section>
					<PageTitle title="Phim đang chiếu" moreUrl="/dang-chieu" />
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
				</section>
				<section>
					<PageTitle title="Phim sắp chiếu" moreUrl="/sap-chieu" />
					{comingSoonLoading ? (
						<Spinner animation="border" variant="primary" />
					) : (
						<Row xs={2} md={3} lg={4} xl={5}>
							{comingSoon &&
								comingSoon.map((movie, idx) => (
									<Col key={idx}>
										<MovieCard movie={movie} />
									</Col>
								))}
						</Row>
					)}
				</section>
			</Container>
		</>
	);
};

export default Home;
