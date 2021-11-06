import { MovieCard, PageTitle } from 'components';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

interface Props {}

const SapChieuPage = (props: Props) => {
	const movies = [
		{
			imageUrl: 'https://www.themoviedb.org/t/p/original/hRMfgGFRAZIlvwVWy8DYJdLTpvN.jpg',
			name: 'Sát Nhân Trong Bóng Tối 2',
			duration: 100,
			release: '11/09/2021',
		},
		{
			imageUrl: 'https://www.themoviedb.org/t/p/original/oxNoVgbu2v9ETL93Kri1pw8osYf.jpg',
			name: 'Sinaliento',
			duration: 100,
			release: '11/09/2021',
		},
		{
			imageUrl: 'https://www.themoviedb.org/t/p/original/ic0intvXZSfBlYPIvWXpU1ivUCO.jpg',
			name: 'Đội Đặc Nhiệm Siêu Đẳng',
			duration: 100,
			release: '11/09/2021',
		},
		{
			imageUrl: 'https://www.themoviedb.org/t/p/original/34nDCQZwaEvsy4CFO5hkGRFDCVU.jpg',
			name: 'Cuộc Chiến Tương Lai',
			duration: 100,
			release: '11/09/2021',
		},
		{
			imageUrl: 'https://www.themoviedb.org/t/p/original/5bFK5d3mVTAvBCXi5NPWH0tYjKl.jpg',
			name: 'Space Jam: Kỷ nguyên mới',
			duration: 100,
			release: '11/09/2021',
		},
		{
			imageUrl: 'https://www.themoviedb.org/t/p/original/kv2Qk9MKFFQo4WQPaYta599HkJP.jpg',
			name: 'Nhóc Trùm 2: Nối Nghiệp Gia Đình',
			duration: 100,
			release: '11/09/2021',
		},
		{
			imageUrl: 'https://www.themoviedb.org/t/p/original/niw2AKHz6XmwiRMLWaoyAOAti0G.jpg',
			name: 'Vô Hạn',
			duration: 100,
			release: '11/09/2021',
		},
		{
			imageUrl: 'https://www.themoviedb.org/t/p/original/bOFaAXmWWXC3Rbv4u4uM9ZSzRXP.jpg',
			name: 'Quá Nhanh Quá Nguy Hiểm 9: Huyền Thoại Tốc Độ',
			duration: 100,
			release: '11/09/2021',
		},
		{
			imageUrl: 'https://www.themoviedb.org/t/p/original/4puYT4R4nqSeqvaQnkMzRQe6aWc.jpg',
			name: 'Mùa hè của Luca',
			duration: 100,
			release: '11/09/2021',
		},
		{
			imageUrl: 'https://www.themoviedb.org/t/p/original/sNfEiOU2QOACkdcUBKRzhFcIYTN.jpg',
			name: 'Lính Đánh Thuê Cuối Cùng',
			duration: 100,
			release: '11/09/2021',
		},
	];
	return (
		<Container className="py-4">
			<PageTitle title="Phim sắp chiếu" moreLabel="Phim đang chiếu" moreUrl="/dang-chieu" />
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

export default SapChieuPage;
