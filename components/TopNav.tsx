import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { BiUserCircle } from 'react-icons/bi';

interface Props {}

export const TopNav = (props: Props) => {
	return (
		<Navbar
			collapseOnSelect
			expand="lg"
			bg="white"
			variant="light"
			className="shadow-sm"
			fixed="top"
		>
			<Container>
				<Navbar.Brand className="h4 mb-0" href="#home">
					Cinebee
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="mx-auto ">
						<Nav.Link href="#features">Trang chủ</Nav.Link>
						<Nav.Link href="#pricing">Lịch chiếu</Nav.Link>
						<Nav.Link href="#pricing">Đang chiếu</Nav.Link>
						<Nav.Link href="#pricing">Sắp chiếu</Nav.Link>
						<Nav.Link href="#pricing">Tin tức</Nav.Link>
					</Nav>
				</Navbar.Collapse>
				<Nav>
					<Nav.Link
						href=""
						className="d-flex justify-content-center align-items-center"
					>
						<BiUserCircle className="h4 mb-0 me-2" /> Đăng nhập
					</Nav.Link>
				</Nav>
			</Container>
		</Navbar>
	);
};
