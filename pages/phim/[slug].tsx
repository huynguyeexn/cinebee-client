import { useRouter } from 'next/router';
import { Col, Container, Row } from 'react-bootstrap';
import Image from 'next/image';
import { MovieCard } from 'components';

const Movie = () => {
	const router = useRouter();
	const { slug } = router.query;

	return (
		<section className="movie-detail">
			<div className="movie-detail--banner">
				<Image
					loader={() => 'https://www.themoviedb.org/t/p/original/lBSrAja7uIULKE5Lscl9dtdWYGA.jpg'}
					src="https://www.themoviedb.org/t/p/original/lBSrAja7uIULKE5Lscl9dtdWYGA.jpg"
					alt=""
					layout="fill"
					objectFit="cover"
					unoptimized={true}
				></Image>
			</div>
			<Container className="movie-detail--content">
				<Row>
					<Col xs={12} className="movie-detail--poster">
						<div className="movie-detail--thumb">
							<Image
								loader={() =>
									'https://www.themoviedb.org/t/p/original/bZnOioDq1ldaxKfUoj3DenHU7mp.jpg'
								}
								src="https://www.themoviedb.org/t/p/original/bZnOioDq1ldaxKfUoj3DenHU7mp.jpg"
								alt=""
								layout="fill"
								objectFit="cover"
								unoptimized={true}
							></Image>
						</div>
						<div className="movie-detail--info">
							<p>Hành đông, viễn tưởng</p>
							<h1>Jurassic Hunt</h1>
							<p>Khởi chiếu: 20/07/2021</p>
						</div>
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default Movie;
