import { useRouter } from 'next/router';
import { Card, Col, Container, Row } from 'react-bootstrap';
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
	const {slug}  = router.query;
	const [movie, setMovie] = React.useState<Movie>();
	const [movieLoading, setMovieLoading] = React.useState(false);
    
	React.useEffect(() => {
		if (slug) {
			(async () => {
				try {
					const response = await movieApi.getById(slug);
					setMovie(response);
				} catch (error) {
					console.error('Failed to get movies playing: ', error);
				}
			})();
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<section className="movie-detail">
			<BannerHeader  movie={movie}/>
			<Container className="movie-detail--content">
				<Info slug={slug}/>
				<Row className='mt-4'>
					<Col lg={7}>
						<Comment />
					</Col>
					<Col lg={5}>
						<Card className="showtime-card movie-card">
							<Cast movie={movie}/>
						</Card>
						<Card className="showtime-card movie-card">
							<Directors movie={movie}/>
						</Card>
					</Col>
				</Row>
				<RelatedMovies/>
			</Container>
		</section>
	);
};

export default Movies;