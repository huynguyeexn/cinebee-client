import { Room } from 'interfaces';
import React from 'react';
import Image from 'next/image';
import { Col, Row } from 'react-bootstrap';

interface Props {
	cols: number;
	room?: Room;
	seatSelected?: number[];
	invalidSeats?: number[];
	onSelectSeat?: (id: number) => void;
}

const RoomShowcase = ({ cols, room, seatSelected, invalidSeats, onSelectSeat }: Props) => {
	return (
		<div className="room">
			<div className="screen">
				{/* eslint-disable-next-line @next/next/no-img-element */}
				<img src="/assets/images/screen-dark.png" alt="Màn Hình" />
			</div>
			<div className="seats" style={{ gridTemplateColumns: `repeat(${cols}, min-content)` }}>
				{room?.seats?.map((seat, colIdx) => (
					<div
						key={`seat-${seat.index}`}
						className={`seat 
							${
								seatSelected?.includes(seat.id as number)
									? 'selected'
									: invalidSeats?.includes(seat.id as number)
									? 'invalid'
									: ''
							}
						`}
						onClick={() => {
							if (invalidSeats?.includes(seat.id as number)) return;
							return onSelectSeat?.(seat.id as number);
						}}
					>
						{seat.label}
					</div>
				))}
			</div>

			<div className="example w-100">
				<Row>
					<Col xs={6} md={4} className="d-flex align-items-center flex-column">
						<div className="seat"></div>
						<p>Ghế trống</p>
					</Col>

					<Col xs={6} md={4} className="d-flex align-items-center flex-column">
						<div className="seat selected"></div>
						<p>Đang chọn</p>
					</Col>

					<Col xs={6} md={4} className="d-flex align-items-center flex-column">
						<div className="seat invalid"></div>
						<p>Ghế đã được mua</p>
					</Col>
				</Row>
			</div>
		</div>
	);
};

export default RoomShowcase;
