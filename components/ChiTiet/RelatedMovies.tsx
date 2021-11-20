import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { MovieCard } from 'components';
import Carousel from 'nuka-carousel';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';
import { Movie } from 'interfaces';
import { movieApi } from 'api-client/movieApi';

interface Props {}

export const RelatedMovies = (props: Props) => {
	// const movies = [
	// 	{
	// 		imageUrl: 'https://www.themoviedb.org/t/p/original/bZnOioDq1ldaxKfUoj3DenHU7mp.jpg',
	// 		name: 'Jurassic Hunt',
	// 		duration: 100,
	// 		release: '11/09/2021',
	// 	},
	// 	{
	// 		imageUrl: 'https://www.themoviedb.org/t/p/original/lSEr1nphZuCqXli3VziIgCI8Ivf.jpg',
	// 		name: 'Suicide Squad: Điệp Vụ Cảm Tử',
	// 		duration: 100,
	// 		release: '11/09/2021',
	// 	},
	// 	{
	// 		imageUrl: 'https://www.themoviedb.org/t/p/original/xeItgLK9qcafxbd8kYgv7XnMEog.jpg',
	// 		name: 'Shang-Chi và Huyền Thoại Thập Luân',
	// 		duration: 100,
	// 		release: '11/09/2021',
	// 	},
	// 	{
	// 		imageUrl: 'https://www.themoviedb.org/t/p/original/6Y9fl8tD1xtyUrOHV2MkCYTpzgi.jpg',
	// 		name: 'SAS: Red Notice',
	// 		duration: 100,
	// 		release: '11/09/2021',
	// 	},
	// 	{
	// 		imageUrl: 'https://www.themoviedb.org/t/p/original/dGv2BWjzwAz6LB8a8JeRIZL8hSz.jpg',
	// 		name: 'Hiện Thân Tà Ác',
	// 		duration: 100,
	// 		release: '11/09/2021',
	// 	},
	// 	{
	// 		imageUrl: 'https://www.themoviedb.org/t/p/original/6Y9fl8tD1xtyUrOHV2MkCYTpzgi.jpg',
	// 		name: 'SAS: Red Notice',
	// 		duration: 100,
	// 		release: '11/09/2021',
	// 	},
	// 	{
	// 		imageUrl: 'https://www.themoviedb.org/t/p/original/dGv2BWjzwAz6LB8a8JeRIZL8hSz.jpg',
	// 		name: 'Hiện Thân Tà Ác',
	// 		duration: 100,
	// 		release: '11/09/2021',
	// 	},
	// ];
	const [movie, setMovie] = React.useState([]);
	const [movieLoading, setMovieLoading] = React.useState(false);

	React.useEffect(() => {
		(async () => {
			try {
				const response = await movieApi.getMovie();
				setMovie(response.data);
			} catch (error) {
				console.error('Failed to get movies playing: ', error);
			}
		})();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const slidesToShow = 5;
	const slidesToScroll = 2;

	const configCarouselBtn = {
		nextButtonClassName: 'btn-carousel next',
		prevButtonClassName: 'btn-carousel prev',
		nextButtonText: <FaChevronRight />,
		prevButtonText: <FaChevronLeft />,
		pagingDotsStyle: {
			fill: 'rgba(93, 172, 70, 1)',
		},
		nextButtonStyle: {
			position: 'relative',
			right: '-40px',
			top: '-77px',
			width: '40px',
			height: '40px',
			borderRadius: '50%',
			background: 'rgb(32 32 32)',
			border: 'none',
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			cursor: 'pointer',
			color: '#dbcc2b',
			fontSize: '40px',
		},
		prevButtonStyle: {
			position: 'relative',
			left: '-40px',
			top: '-77px',
			width: '40px',
			height: '40px',
			borderRadius: '50%',
			background: 'rgb(32 32 32)',
			border: 'none',
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			cursor: 'pointer',
			color: '#dbcc2b',
			fontSize: '40px',
		},
	};

	return (
		<section>
			<Row className="page-title">
				<Col>
					<h3 className="page-title--title">Phim Sắp Chiếu</h3>
				</Col>
			</Row>
			<Row>
				<Carousel slidesToShow={slidesToShow} slidesToScroll={slidesToScroll}>
					{movie.map((movie: Movie) => (
						<Col key={movie.id}>
							<MovieCard movie={movie} />
						</Col>
					))}
				</Carousel>
			</Row>
		</section>
	);
};
