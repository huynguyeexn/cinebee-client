import { useRouter } from 'next/router';
import { Button, Card, Col, Container, Modal, Row, Spinner } from 'react-bootstrap';
import { RelatedMovies } from 'components/ChiTiet/RelatedMovies';
import { BannerHeader } from 'components/ChiTiet/BannerHeader';
import { Info } from 'components/ChiTiet/Info';
import { Comments } from 'components/ChiTiet/Comment';
import { Cast } from 'components/ChiTiet/Cast';
import { Directors } from 'components/ChiTiet/Directors';
import React from 'react';
import { movieApi } from 'api-client/movieApi';
import { Comment, ListParams, Movie } from 'interfaces';
import WebView from 'react-native-webview';

const Movies = () => {
	const router = useRouter();
	const { slug, page, limit  } = router.query;
	const [movie, setMovie] = React.useState<Movie>();
	const [comments, setcomments] = React.useState<Comment[]>([]);
	const [movieLoading, setMovieLoading] = React.useState(false);
	const [isConfirmCancel, setIsConfirmCancel] = React.useState(false);

	React.useEffect(() => {
		if (slug) {
			(async () => {
				setMovieLoading(true);
				try {
					const params: ListParams = {
						page: Number(`${page}`) || 1,
						per_page: Number(`${limit}`) || 5,
					};
					const comment = await movieApi.getMovieByComments(slug,params);
					const response: any = await movieApi.getById(slug);
					console.log(comment.data);
					setMovie(response as Movie);
					setcomments(comment.data as Comment[]);
				} catch (error) {
					console.error('Failed to get movies playing: ', error);
				}
				setMovieLoading(false);
			})();
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	

	const handleThanhToanClick = async () => {
		
	};
	
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
									<Comments comments={comments} />
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
							<Modal show={true}>
								<Modal.Header >
									<Modal.Title>Trailer</Modal.Title>
								</Modal.Header>
								<Modal.Body>
									<video width='400' controls>
										<source src="https://www.youtube.com/watch?v=EVWdzVtSh1I&ab_channel=CGVCinemasVietnam"/>
									</video>
								</Modal.Body>
								<Modal.Footer>
									<Button variant="success">
										Đóng
									</Button>
									<Button variant="outline-danger">
										Hủy đơn hàng
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
