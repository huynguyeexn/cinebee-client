import { movieApi } from 'api-client/movieApi';
import { BannerHeader } from 'components/ChiTiet/BannerHeader';
import { Cast } from 'components/ChiTiet/Cast';
import { Comments } from 'components/ChiTiet/Comment';
import { Directors } from 'components/ChiTiet/Directors';
import { Info } from 'components/ChiTiet/Info';
import { RelatedMovies } from 'components/ChiTiet/RelatedMovies';
import { Comment, ListParams, Movie } from 'interfaces';
import { useRouter } from 'next/router';
import React from 'react';
import { Button, Card, Col, Container, Modal, Row, Spinner } from 'react-bootstrap';
import { trailerLink } from 'utils';

const Movies = () => {
	const router = useRouter();
	const { slug, page, limit } = router.query;
	const [movie, setMovie] = React.useState<Movie>();
	const [comments, setComments] = React.useState<Comment[]>([]);
	const [movieLoading, setMovieLoading] = React.useState(false);
	const [watchTrailer, setWatchTrailer] = React.useState(false);

	React.useEffect(() => {
		if (slug) {
			(async () => {
				setMovieLoading(true);
				try {
					const params: ListParams = {
						page: Number(`${page}`) || 1,
						per_page: Number(`${limit}`) || 5,
					};
					const comment = await movieApi.getMovieByComments(slug, params);
					const response: any = await movieApi.getById(slug);
					console.log(comment.data);
					setMovie(response as Movie);
					setComments(comment.data as Comment[]);
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
							<Info onWatchTrailer={() => setWatchTrailer(true)} movie={movie} />
							<Row className="mt-4">
								<Col lg={7}>
									<Comments movie={movie} comments={comments} />
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
							<Modal show={watchTrailer} dialogClassName="modal-60w">
								<Modal.Body>
									{trailerLink(movie.trailer) === '' ? (
										<div className="text-center">
											<h3>Không có trailer</h3>
										</div>
									) : (
										<div className="block">
											<iframe
												style={{ width: '100%', height: '60vh' }}
												src={trailerLink(movie.trailer)}
												title={movie.name}
												frameBorder="0"
												allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
												allowFullScreen
											></iframe>
										</div>
									)}
								</Modal.Body>
								<Modal.Footer>
									<Button variant="primary" onClick={() => setWatchTrailer(false)}>
										Đóng
									</Button>
								</Modal.Footer>
							</Modal>
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
