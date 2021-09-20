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
			imageUrl:
				'https://www.themoviedb.org/t/p/original/bZnOioDq1ldaxKfUoj3DenHU7mp.jpg',
			name: 'Jurassic Hunt',
			duration: 100,
			release: '11/09/2021',
		},
		{
			imageUrl:
				'https://www.themoviedb.org/t/p/original/lSEr1nphZuCqXli3VziIgCI8Ivf.jpg',
			name: 'Suicide Squad: Điệp Vụ Cảm Tử',
			duration: 100,
			release: '11/09/2021',
		},
		{
			imageUrl:
				'https://www.themoviedb.org/t/p/original/xeItgLK9qcafxbd8kYgv7XnMEog.jpg',
			name: 'Shang-Chi và Huyền Thoại Thập Luân',
			duration: 100,
			release: '11/09/2021',
		},
		{
			imageUrl:
				'https://www.themoviedb.org/t/p/original/6Y9fl8tD1xtyUrOHV2MkCYTpzgi.jpg',
			name: 'SAS: Red Notice',
			duration: 100,
			release: '11/09/2021',
		},
		{
			imageUrl:
				'https://www.themoviedb.org/t/p/original/dGv2BWjzwAz6LB8a8JeRIZL8hSz.jpg',
			name: 'Hiện Thân Tà Ác',
			duration: 100,
			release: '11/09/2021',
		},
		{
			imageUrl:
				'https://www.themoviedb.org/t/p/original/cP7odDzzFBD9ycxj2laTeFWGLjD.jpg',
			name: 'Đi Tìm Công Lý',
			duration: 100,
			release: '11/09/2021',
		},
		{
			imageUrl:
				'https://www.themoviedb.org/t/p/original/9dKCd55IuTT5QRs989m9Qlb7d2B.jpg',
			name: 'Jungle Cruise: Thám Hiểm Rừng Xanh',
			duration: 100,
			release: '11/09/2021',
		},
		{
			imageUrl:
				'https://www.themoviedb.org/t/p/original/snwMN6DRf987jj79UqS1rd5Rvul.jpg',
			name: 'Goá Phụ Đen',
			duration: 100,
			release: '11/09/2021',
		},
		{
			imageUrl:
				'https://www.themoviedb.org/t/p/original/jGYJyPzVgrVV2bgClI9uvEZgVLE.jpg',
			name: 'Căn Phòng Tử Thần: Cái Chết Trở Lại',
			duration: 100,
			release: '11/09/2021',
		},
		{
			imageUrl:
				'https://www.themoviedb.org/t/p/original/uQWgSRXeYRWCvGIX9LDNBW6XBYD.jpg',
			name: 'Kate',
			duration: 100,
			release: '11/09/2021',
		},
	];

	const comingsoon = [
		{
			imageUrl:
				'https://www.themoviedb.org/t/p/original/hRMfgGFRAZIlvwVWy8DYJdLTpvN.jpg',
			name: 'Sát Nhân Trong Bóng Tối 2',
			duration: 100,
			release: '11/09/2021',
		},
		{
			imageUrl:
				'https://www.themoviedb.org/t/p/original/oxNoVgbu2v9ETL93Kri1pw8osYf.jpg',
			name: 'Sinaliento',
			duration: 100,
			release: '11/09/2021',
		},
		{
			imageUrl:
				'https://www.themoviedb.org/t/p/original/ic0intvXZSfBlYPIvWXpU1ivUCO.jpg',
			name: 'Đội Đặc Nhiệm Siêu Đẳng',
			duration: 100,
			release: '11/09/2021',
		},
		{
			imageUrl:
				'https://www.themoviedb.org/t/p/original/34nDCQZwaEvsy4CFO5hkGRFDCVU.jpg',
			name: 'Cuộc Chiến Tương Lai',
			duration: 100,
			release: '11/09/2021',
		},
		{
			imageUrl:
				'https://www.themoviedb.org/t/p/original/5bFK5d3mVTAvBCXi5NPWH0tYjKl.jpg',
			name: 'Space Jam: Kỷ nguyên mới',
			duration: 100,
			release: '11/09/2021',
		},
		{
			imageUrl:
				'https://www.themoviedb.org/t/p/original/kv2Qk9MKFFQo4WQPaYta599HkJP.jpg',
			name: 'Nhóc Trùm 2: Nối Nghiệp Gia Đình',
			duration: 100,
			release: '11/09/2021',
		},
		{
			imageUrl:
				'https://www.themoviedb.org/t/p/original/niw2AKHz6XmwiRMLWaoyAOAti0G.jpg',
			name: 'Vô Hạn',
			duration: 100,
			release: '11/09/2021',
		},
		{
			imageUrl:
				'https://www.themoviedb.org/t/p/original/bOFaAXmWWXC3Rbv4u4uM9ZSzRXP.jpg',
			name: 'Quá Nhanh Quá Nguy Hiểm 9: Huyền Thoại Tốc Độ',
			duration: 100,
			release: '11/09/2021',
		},
		{
			imageUrl:
				'https://www.themoviedb.org/t/p/original/4puYT4R4nqSeqvaQnkMzRQe6aWc.jpg',
			name: 'Mùa hè của Luca',
			duration: 100,
			release: '11/09/2021',
		},
		{
			imageUrl:
				'https://www.themoviedb.org/t/p/original/sNfEiOU2QOACkdcUBKRzhFcIYTN.jpg',
			name: 'Lính Đánh Thuê Cuối Cùng',
			duration: 100,
			release: '11/09/2021',
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
										imageUrl={movie.imageUrl}
										name={movie.name}
										release={movie.release}
										durations={movie.duration}
									/>
								</Col>
							))}
					</Row>
				</section>
				<section>
					<PageTitle title="Phim sắp chiếu" moreUrl="/sap-chieu" />
					<Row xs={2} md={3} lg={4} xl={5}>
						{comingsoon &&
							comingsoon.map((movie, idx) => (
								<Col key={idx}>
									<MovieCard
										imageUrl={movie.imageUrl}
										name={movie.name}
										release={movie.release}
										durations={movie.duration}
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
