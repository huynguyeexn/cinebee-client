import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Link from 'next/link';
interface Props {
	title: string;
	moreUrl?: string;
}

export const PageTitle = ({ title, moreUrl }: Props) => {
	return (
		<Row className=" mb-4 border-bottom">
			<Col>
				<h4>{title}</h4>
			</Col>
			<Col className="text-right">
				{moreUrl && <Link href={moreUrl}>Xem thêm</Link>}
			</Col>
		</Row>
	);
};
