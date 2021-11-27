import { showtimesApi } from 'api-client/showtimeApi';
import { AxiosResponse } from 'axios';
import RoomShowcase from 'components/DatLich/RoomShowcase';
import { Showtime } from 'interfaces';
import moment from 'moment';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { IoArrowBackCircleOutline } from 'react-icons/io5';
import { formatDateWithDay, formatVND, getRandomInt } from 'utils';

interface Props {}

const DatLichPage = (props: Props) => {
	const router = useRouter();
	const { id } = router.query;

	const [showtime, setShowtime] = useState<Showtime>();
	const [seatSelected, setSeatSelected] = useState<number[]>([]);

	useEffect(() => {
		if (id === undefined) {
			router.push('/');
		} else {
			(async () => {
				const response = await showtimesApi.getShowtimeById(Number(id));
				setShowtime(response as unknown as Showtime);
			})();
		}
	}, [id, router]);

	const handleSeatSelect = (id: number) => {
		if (seatSelected.includes(id)) {
			setSeatSelected(seatSelected.filter((seatId) => seatId !== id));
		} else {
			setSeatSelected([...seatSelected, id]);
		}
	};

	const handleRechooseSeat = () => {
		setSeatSelected([]);
	};

	const handleDatVe = () => {
		const orderCodeTemp: number = Number(`${getRandomInt(100, 999)}${Date.now()}`);

		const payload = {
			order_code: orderCodeTemp,
			showtime_id: id,
			seats: seatSelected,
			price: (showtime?.room.price || 75000) * seatSelected.length,
		};

		window.sessionStorage.setItem('orderTemp', JSON.stringify(payload));

		router.push(`/don-hang`);
	};

	return (
		<Container fluid className="chon-ghe-page">
			<Row>
				<Col md={8}>
					{showtime && (
						<RoomShowcase
							cols={showtime.room.cols}
							room={showtime.room}
							seatSelected={seatSelected}
							onSelectSeat={handleSeatSelect}
						/>
					)}
				</Col>
				<Col md={4}>
					<Card>
						<Card.Body>
							<Card.Title>
								<Card.Link onClick={() => router.back()}>
									<IoArrowBackCircleOutline className="mr-2" style={{ fontSize: '1.5rem' }} />
								</Card.Link>
								Thông tin lịch chiếu
							</Card.Title>
							<Card.Text>
								<Row>
									<Col xs={6}>Phim:</Col>
									<Col xs={6} className="text-right text-primary">
										{showtime?.movie.name}
									</Col>
									<Col xs={6}>Rạp:</Col>
									<Col xs={6} className="text-right text-primary">
										{showtime?.room.name}
									</Col>
									<Col xs={6}>Ngày chiếu: </Col>
									<Col xs={6} className="text-right text-primary">
										{formatDateWithDay(showtime?.start)}
									</Col>
									<Col xs={6}>Giờ chiếu:</Col>
									<Col xs={6} className="text-right text-primary">
										{moment(showtime?.start).format('HH:mm')}
									</Col>
									<Col xs={6}>Giá vé:</Col>
									<Col xs={6} className="text-right text-primary">
										{formatVND(showtime?.room.price)}
									</Col>
									<Col xs={6}>Số ghế đã chọn:</Col>
									<Col xs={6} className="text-right text-primary">
										{seatSelected.length}
									</Col>
									<Col xs={6}>Tổng tiền:</Col>
									<Col xs={6} className="text-right text-primary">
										{formatVND(seatSelected.length * (showtime?.room.price || 75000)) || 0}
									</Col>
								</Row>
							</Card.Text>
							<Button
								variant="outline-light"
								onClick={handleRechooseSeat}
								disabled={!seatSelected.length}
							>
								Chọn lại
							</Button>{' '}
							<Button
								variant="primary"
								disabled={!seatSelected.length}
								onClick={() => handleDatVe()}
							>
								Đặt vé
							</Button>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Container>
	);
};

export async function getServerSideProps() {
	return {
		props: {},
	};
}

export default DatLichPage;
