import React from 'react';
import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap';
import { GiRaccoonHead } from 'react-icons/gi';
interface Props {}

export const Footer = (props: Props) => {
	return (
		<footer className="py-5 bg-black text-light">
			<Container>
				<Row>
					<Col className="text-center">
						<p>
							Copyright © 2021 <a href="">Cinebee</a>, Inc. All rights reserved.
						</p>
					</Col>
				</Row>
			</Container>
		</footer>
	);
};
