import { useRouter } from 'next/router';
import { Card, Col, Container, Row, Spinner } from 'react-bootstrap';
import { RelatedMovies } from 'components/ChiTiet/RelatedMovies';
import { BannerHeader } from 'components/ChiTiet/BannerHeader';
import { Info } from 'components/ChiTiet/Info';
import { Comment } from 'components/ChiTiet/Comment';
import { Cast } from 'components/ChiTiet/Cast';
import { Directors } from 'components/ChiTiet/Directors';
import React from 'react';
import { movieApi } from 'api-client/movieApi';
import { Movie } from 'interfaces';

const Movies = () => {
	const router = useRouter();
	const { slug } = router.query;
	const [movie, setMovie] = React.useState<Movie>();
	const [movieLoading, setMovieLoading] = React.useState(false);

	React.useEffect(() => {
		if (slug) {
			(async () => {
				setMovieLoading(true);
				try {
					const response: any = await movieApi.getById(slug);
					setMovie(response as Movie);
				} catch (error) {
					console.error('Failed to get movies playing: ', error);
				}
				setMovieLoading(false);
			})();
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	
	return (
		<section
			className={`movie-detail ${
				movieLoading && 'd-flex justify-content-center align-items-center p-5'
			}`}
		>
			{movieLoading ? (
				<Spinner animation="border" variant="primary" />
			) : (
				movie && (
					<>
						<BannerHeader movie={movie} />
						<Container className="movie-detail--content">
							<Info movie={movie} />
							<Row className="mt-4">
								<Col lg={7}>
									<Comment />
								</Col>
								<Col lg={5}>
									<Card className="showtime-card movie-card">
										<Cast movie={movie} />
									</Card>
									<Card className="showtime-card movie-card">
										<Directors movie={movie} />
									</Card>
								</Col>
							</Row>
							<RelatedMovies />
						</Container>
					</>
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
export default Movies;
