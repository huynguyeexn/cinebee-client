import { Showtime } from 'interfaces';
import React from 'react';
import { Card, Col, ListGroup, ListGroupItem, Row } from 'react-bootstrap';
import moment from 'moment';
import { GiSeaStar } from 'react-icons/gi';
import { formatVND } from 'utils';

interface Props {
	showtime: Showtime;
	price: number;
	seats: number[];
}

export const CountExpire = ({ showtime, price, seats }: Props) => {
	return (
		<Row className="payment--countexpire">
			<Row className="payment--countdown">
				<Col lg={9} className="pr-0">
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
						</ListGroup>
					</Card>
				</Col>
				<Col lg={3} className="d-flex align-items-center pl-1">
					<Card className="payment--time pb-3 pt-4 mt-4 w-100">
						<Card.Header className="p-0">
							<span>Thời gian giữ ghế</span>
						</Card.Header>
						<Card.Body className="p-0">
							<h1 className="m-0">00:00</h1>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Row>
	);
};
