import { Showtime } from 'interfaces';
import moment from 'moment';
import React from 'react';
import { Card, Col, ListGroup, ListGroupItem, Row } from 'react-bootstrap';
import { formatVND, getSession } from 'utils';
import TimeoutBox from './timeoutBox';

interface Props {
	showtime: Showtime;
	seats: number[];
}

export const CountExpire = ({ showtime, seats }: Props) => {
	const price = showtime.room.price;

	const order = getSession('order');
	const timeout = moment(order.booking_at as string).add(5, 'minutes').toJSON();

	return (
		<Row className="payment--countexpire">
			<Row className="payment--countdown">
				<Col lg={12} className="pr-0">
					<p className="mb-0">TÊN PHIM</p>
					<h2 className="mt-0">{showtime?.movie.name}</h2>
					<Card className="payment--info-card">
						<ListGroup className="info flex flex-row">
							<ListGroupItem className="item pt-3 pl-3">
								<h6 className="mb-0">Ngày</h6>
								<span>{moment(showtime?.start).format('DD/MM/YYYY')}</span>
							</ListGroupItem>
							<ListGroupItem className="item pt-3 pl-3 ticket">
								<h6 className="mb-0">Số Vé</h6>
								<p className="mb-0">
									<span>{seats.length}</span>
								</p>
							</ListGroupItem>
							<ListGroupItem className="item pt-3 pl-3 combo">
								<h6 className="mb-0">Combo</h6>
								<p className="mb-0">
									<span>0</span>
								</p>
							</ListGroupItem>
							<ListGroupItem className="item pt-3 pl-3">
								<h6 className="mb-0">Tổng Tiền</h6>
								<p className="mb-0">
									<span>{formatVND(price * seats.length)}</span>
								</p>
							</ListGroupItem>
							<ListGroupItem className="item pt-3 pl-3">
								<h6 className="mb-0">Thời gian giữ ghế</h6>
								<p className="mb-0">
									<TimeoutBox timeout={timeout}/>
								</p>
							</ListGroupItem>
						</ListGroup>
					</Card>
				</Col>
			</Row>
		</Row>
	);
};
