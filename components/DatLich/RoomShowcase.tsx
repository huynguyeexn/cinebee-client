import { Room } from 'interfaces';
import React from 'react';
import Image from 'next/image';

interface Props {
	cols: number;
	room?: Room;
	seatSelected?: number[];
	onSelectSeat?: (id: number) => void;
}

const RoomShowcase = ({ cols, room, seatSelected, onSelectSeat }: Props) => {
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
						className={`seat ${seatSelected?.includes(seat.id as number) ? 'selected' : ''}`}
						onClick={() => onSelectSeat && onSelectSeat(seat.id as number)}
					>
						{seat.label}
					</div>
				))}
			</div>
		</div>
	);
};

export default RoomShowcase;
