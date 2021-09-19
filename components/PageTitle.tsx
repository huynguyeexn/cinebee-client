import React from 'react';
import { Col, Row } from 'react-bootstrap';

interface Props {
	title: string;
}

export const PageTitle = ({ title }: Props) => {
	return (
		<Row className=" mb-4 border-bottom">
			<Col>
				<h4>{title}</h4>
			</Col>
			<Col className="text-end">
				<a href="">Xem thêm</a>
			</Col>
		</Row>
	);
};
