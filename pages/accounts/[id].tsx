import { orderApi } from 'api-client';
import { PageTitle } from 'components';
import { Order } from 'interfaces';
import React, { useState } from 'react';
import { Col, Container, Image, Row, Spinner, Table } from 'react-bootstrap';
import QRImage from 'qrcode.react';
import { useRouter } from 'next/router';
import moment from 'moment';
import { formatDateWithDay, formatVND } from 'utils';

interface Props {}

const Transaction = () => {
	const router = useRouter();
	const { id } = router.query;
	const [order, setOrder] = useState<Order>();
	const [total, setTotal] = useState(0);
	const [movieLoading, setMovieLoading] = React.useState(false);
	console.log(id);

	React.useEffect(() => {
		if (id) {
			(async () => {
				setMovieLoading(true);
				try {
					const orders: any = await orderApi.getOrderById(Number(id));
					setOrder(orders as Order);
				} catch (error) {
					console.error('Failed to get movies playing: ', error);
				}
				setMovieLoading(false);
			})();
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	console.log(order);

	return (
		<section
			className={`movie-detail ${
				movieLoading && 'd-flex justify-content-center align-items-center p-5'
			}`}
		>
			{movieLoading ? (
				<Spinner animation="border" variant="primary" />
			) : (
				order && (
					<Container
						className="justify-content-center align-items-center"
						style={{ minHeight: '80vh', width: '100%' }}
					>
						<PageTitle title="Giao dịch của tôi" moreLabel='Quay về' moreUrl='/accounts/profile'/>
						<Row>
							<Col lg={3} className="giao-dich--image_movie">
								<Image alt="" src={order?.showtime.movie.posters_full[0].url || ''}></Image>
							</Col>
							<Col lg={7} className="giao-dich--content_movie">
								<h3>{order?.showtime.movie.name}</h3>
								<div className="d-flex">
									<p>Suất chiếu:</p> <span>{moment(order?.showtime.start).format('HH:mm')}</span>
								</div>
								<div className="d-flex">
									<p>Ngày:</p> <span>{moment(order?.showtime.start).format('DD/MM/YYYY')}</span>
								</div>
								<div className="d-flex">
									<p>Phòng:</p> <span>{order?.showtime.room.name}</span>
								</div>
								<p>Mã QR</p>
								<div className="d-flex justify-content-start align-items-center">
									{order?.verify_code && (
										<QRImage value={order?.verify_code} size={200} style={{ width: '200px' }} />
									)}
								</div>
							</Col>
							<h3 className="mt-5">Thông tin giao dịch</h3>
							<Table striped bordered hover variant="dark" className="mt-3 giao-dich--info">
								<thead>
									<tr>
										<th className="w40 text-center">Mã vé</th>
										<th className="w40 text-center">Ghế</th>
										<th className="w15 text-center">Giá vé</th>
									</tr>
								</thead>
								<tbody>
									{order?.movieTickets.map((ticket, index) => {
										return (
											<tr key={index}>
												<td className="w40">{ticket.id}</td>
												<td>{ticket.seat_name}</td>
												<td>{formatVND(ticket.price)}</td>
											</tr>
										);
									})}
									<tr>
										<td className="text_total w40">Tổng</td>
										<td></td>
										<td className="text_total">
											{formatVND(order?.showtime.room.price * order.movieTickets.length)}
										</td>
									</tr>
								</tbody>
							</Table>
						</Row>
					</Container>
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

export default Transaction;
