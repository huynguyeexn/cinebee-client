import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Link from 'next/link';
interface Props {
	title: string;
	moreUrl?: string;
	moreLabel?: string;
}

export const PageTitle = ({ title, moreUrl, moreLabel }: Props) => {
	return (
		<Row className="page-title">
			<Col>
				<h3 className="page-title--title">{title}</h3>
			</Col>
			<Col className="text-right">
				{moreUrl && (
					<Link href={moreUrl}>{moreLabel ? moreLabel : 'Xem thêm'}</Link>
				)}
			</Col>
		</Row>
	);
};
