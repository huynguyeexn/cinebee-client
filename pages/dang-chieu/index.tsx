import { MovieCard, PageTitle } from 'components';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

interface Props {}

const DangChieuPage = (props: Props) => {
	const movies = [
		{
			imageUrl: 'https://www.themoviedb.org/t/p/original/bZnOioDq1ldaxKfUoj3DenHU7mp.jpg',
			name: 'Jurassic Hunt',
			duration: 100,
			release: '11/09/2021',
		},
		{
			imageUrl: 'https://www.themoviedb.org/t/p/original/lSEr1nphZuCqXli3VziIgCI8Ivf.jpg',
			name: 'Suicide Squad: Điệp Vụ Cảm Tử',
			duration: 100,
			release: '11/09/2021',
		},
		{
			imageUrl: 'https://www.themoviedb.org/t/p/original/xeItgLK9qcafxbd8kYgv7XnMEog.jpg',
			name: 'Shang-Chi và Huyền Thoại Thập Luân',
			duration: 100,
			release: '11/09/2021',
		},
		{
			imageUrl: 'https://www.themoviedb.org/t/p/original/6Y9fl8tD1xtyUrOHV2MkCYTpzgi.jpg',
			name: 'SAS: Red Notice',
			duration: 100,
			release: '11/09/2021',
		},
		{
			imageUrl: 'https://www.themoviedb.org/t/p/original/dGv2BWjzwAz6LB8a8JeRIZL8hSz.jpg',
			name: 'Hiện Thân Tà Ác',
			duration: 100,
			release: '11/09/2021',
		},
		{
			imageUrl: 'https://www.themoviedb.org/t/p/original/cP7odDzzFBD9ycxj2laTeFWGLjD.jpg',
			name: 'Đi Tìm Công Lý',
			duration: 100,
			release: '11/09/2021',
		},
		{
			imageUrl: 'https://www.themoviedb.org/t/p/original/9dKCd55IuTT5QRs989m9Qlb7d2B.jpg',
			name: 'Jungle Cruise: Thám Hiểm Rừng Xanh',
			duration: 100,
			release: '11/09/2021',
		},
		{
			imageUrl: 'https://www.themoviedb.org/t/p/original/snwMN6DRf987jj79UqS1rd5Rvul.jpg',
			name: 'Goá Phụ Đen',
			duration: 100,
			release: '11/09/2021',
		},
		{
			imageUrl: 'https://www.themoviedb.org/t/p/original/jGYJyPzVgrVV2bgClI9uvEZgVLE.jpg',
			name: 'Căn Phòng Tử Thần: Cái Chết Trở Lại',
			duration: 100,
			release: '11/09/2021',
		},
		{
			imageUrl: 'https://www.themoviedb.org/t/p/original/uQWgSRXeYRWCvGIX9LDNBW6XBYD.jpg',
			name: 'Kate',
			duration: 100,
			release: '11/09/2021',
		},
	];
	return (
		<Container className="py-4">
			<PageTitle title="Phim đang chiếu" moreLabel="Phim sắp chiếu" moreUrl="/sap-chieu" />
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
		</Container>
	);
};

export default DangChieuPage;
