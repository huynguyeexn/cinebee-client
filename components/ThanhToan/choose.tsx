import { seatApi } from 'api-client/seatApi';
import { Seat, Showtime } from 'interfaces';
import React from 'react';
import { Card, ListGroup, ListGroupItem, Row } from 'react-bootstrap';

interface Props {
	showtime: Showtime;
	seats: number[];
}

export const Choose = ({ seats, showtime }: Props) => {
	return (
		<div className="choose mt-5">
			<Row className="w-100 ml-0">
				<Card className="w-100">
					<ListGroup className="d-flex flex-row">
						<ListGroupItem className="d-flex align-items-center rounded name justify-content-center">
							Ghế
						</ListGroupItem>
						<ListGroupItem className="p-0 border-0 w-100">
							<Card>
								<ListGroup className="info">
									{seats.map((value, idx) => (
										<ListGroupItem key={idx} className="item pt-3 pl-3">
											{showtime.room.seats.find((seat) => seat.id === value)?.label}
										</ListGroupItem>
									))}
								</ListGroup>
							</Card>
						</ListGroupItem>
					</ListGroup>
				</Card>
			</Row>
		</div>
	);
};
