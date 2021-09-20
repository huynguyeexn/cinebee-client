import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { BiUserCircle } from 'react-icons/bi';
import Link from 'next/link';

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
				<Link href="/" passHref>
					<Navbar.Brand className="h4 mb-0">Cinebee</Navbar.Brand>
				</Link>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="mx-auto ">
						<Link href="/" passHref>
							<Nav.Link>Trang chủ</Nav.Link>
						</Link>
						<Link href="/lich-chieu" passHref>
							<Nav.Link href="#pricing">Lịch chiếu</Nav.Link>
						</Link>
						<Link href="/dang-chieu" passHref>
							<Nav.Link href="#pricing">Đang chiếu</Nav.Link>
						</Link>
						<Link href="/sap-chieu" passHref>
							<Nav.Link href="#pricing">Sắp chiếu</Nav.Link>
						</Link>
						<Link href="/tin-tuc" passHref>
							<Nav.Link href="#pricing">Tin tức</Nav.Link>
						</Link>
					</Nav>
					<Nav>
						<Nav.Link
							href=""
							className="d-flex justify-content-center align-items-center"
						>
							<BiUserCircle className="h4 mb-0 me-2" /> Đăng nhập
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};
