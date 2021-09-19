import React from 'react';
import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap';
import { GiRaccoonHead } from 'react-icons/gi';
interface Props {}

export const Footer = (props: Props) => {
	return (
		<Navbar id="footer" bg="dark" variant="dark">
			<Container className="align-items-start flex-column">
				<Row className="border-bottom mb-4 pb-5">
					<Col md={3}>
						<Nav defaultActiveKey="/home" className="flex-column">
							<Nav.Link href="/home">FAQ</Nav.Link>
							<Nav.Link eventKey="link-1">Thỏa thuận sử dụng</Nav.Link>
							<Nav.Link eventKey="link-2">Chính sách bảo mật</Nav.Link>
						</Nav>
					</Col>
					<Col md={3}>
						<Nav defaultActiveKey="/home" className="flex-column">
							<Nav.Link href="/home">FAQ</Nav.Link>
							<Nav.Link eventKey="link-1">Thỏa thuận sử dụng</Nav.Link>
							<Nav.Link eventKey="link-2">Chính sách bảo mật</Nav.Link>
						</Nav>
					</Col>
					<Col md={3}>
						<Nav defaultActiveKey="/home" className="flex-column">
							<Nav.Link href="/home">FAQ</Nav.Link>
							<Nav.Link eventKey="link-1">Thỏa thuận sử dụng</Nav.Link>
							<Nav.Link eventKey="link-2">Chính sách bảo mật</Nav.Link>
						</Nav>
					</Col>
					<Col md={3}>
						<Nav defaultActiveKey="/home" className="flex-column">
							<Nav.Link href="/home">FAQ</Nav.Link>
							<Nav.Link eventKey="link-1">Thỏa thuận sử dụng</Nav.Link>
							<Nav.Link eventKey="link-2">Chính sách bảo mật</Nav.Link>
						</Nav>
					</Col>
				</Row>
				<Row>
					<Col md={6}>
						<Navbar.Brand href="#home">Cinebee</Navbar.Brand>
					</Col>
					<Col md={6} className="text-end">
						<Navbar.Text>
							Cinema Management System by{' '}
							<a href="">
								<GiRaccoonHead className="h4" /> Raccoon Team
							</a>
						</Navbar.Text>
					</Col>
				</Row>
			</Container>
		</Navbar>
	);
};
