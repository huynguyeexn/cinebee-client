// CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import { BannerHeader, PageTitle } from 'components';
import { MovieCard } from 'components/MovieCard';
import type { NextPage } from 'next';
import { Col, Container, Row } from 'react-bootstrap';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

const Home: NextPage = () => {
	const movies = [
		{
			src: 'https://www.themoviedb.org/t/p/original/qg82Yh0ruw73DBtE2JLaIufIDmT.jpg',
			name: 'Venom',
			durations: '100',
			release: '20/07/2021',
		},
		{
			src: 'https://www.themoviedb.org/t/p/original/sdcMDlrh0TWPY04fLTtKXnM9lmj.jpg',
			name: '',
			durations: '',
			release: '',
		},
		{
			src: 'https://www.themoviedb.org/t/p/original/ayKhR40ClDEivfmubfcXeyNPo2r.jpg',
			name: '',
			durations: '',
			release: '',
		},
		{
			src: 'https://www.themoviedb.org/t/p/original/7HdoUIMktAEyyJU8oUsB4IEl4Gc.jpg',
			name: '',
			durations: '',
			release: '',
		},
		{
			src: 'https://www.themoviedb.org/t/p/original/5boXtxQjExJ7EsVvqICt0vZTGRC.jpg',
			name: '',
			durations: '',
			release: '',
		},
	];

	return (
		<>
			<section className="mb-5">
				<BannerHeader />
			</section>
			<Container>
				<section>
					<PageTitle title="Phim đang chiếu" moreUrl="/dang-chieu" />
					<Row xs={2} md={3} lg={4} xl={5}>
						{movies &&
							movies.map((movie, idx) => (
								<Col key={idx}>
									<MovieCard
										imageUrl={movie.src}
										name={movie.name}
										release={movie.release}
										durations={movie.durations}
									/>
								</Col>
							))}
					</Row>
				</section>
			</Container>
		</>
	);
};

export default Home;
