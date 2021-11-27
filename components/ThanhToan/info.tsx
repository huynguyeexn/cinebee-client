import { Showtime } from 'interfaces';
import React from 'react';
import { Row } from 'react-bootstrap';
import { Choose } from './choose';
import { Movies } from './movie';
import { Total } from './total';
import { User } from './user';

interface Props {
	showtime: Showtime;
	price: number;
	seats: number[];
}

export const Info = ({ showtime, price, seats }: Props) => {
	return (
		<Row className="mt-4 payment--body">
			<Row className="payment--content pb-5">
				<Row className="payment--info">
					<User />
					<Movies showtime={showtime} />
					<Choose showtime={showtime} seats={seats} />
					<Total price={price} seats={seats} />
				</Row>
			</Row>
		</Row>
	);
};
