import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { FaRegUser } from 'react-icons/fa';
import { CgMenuRight } from 'react-icons/cg';
import { RiArrowDownSLine } from 'react-icons/ri';
import Link from 'next/link';

interface Props {}

export const TopNav = (props: Props) => {
	return (
		<Navbar
			collapseOnSelect
			expand="lg"
			bg="white"
			variant="light"
			className="shadow-sm topnav"
			fixed="top"
		>
			<Container>
				<Link href="/" passHref>
					<Navbar.Brand className="h4 mb-0">Cinebee</Navbar.Brand>
				</Link>
				<Navbar.Toggle aria-controls="responsive-navbar-nav">
					<CgMenuRight />
				</Navbar.Toggle>
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="mx-auto topnav__menu">
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
						<NavDropdown
							title={
								<>
									Góc điện ảnh <RiArrowDownSLine />
								</>
							}
							id="basic-nav-dropdown"
						>
							<NavDropdown.Item href="#action/3.1">
								Thể loại phim
							</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.2">Diễn viên</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.3">Đạo diễn</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.3">
								Tin điện ảnh
							</NavDropdown.Item>
						</NavDropdown>
					</Nav>
					<Nav>
						<Nav.Link
							href=""
							className="d-flex justify-content-center align-items-center"
						>
							<FaRegUser className="mb-0 mr-1" />
							Đăng nhập
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};
