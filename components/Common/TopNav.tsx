import { useAuth } from 'hooks';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { AiOutlineInfo } from 'react-icons/ai';
import { CgMenuRight } from 'react-icons/cg';
import { FaRegUser } from 'react-icons/fa';
import { FiLogOut } from 'react-icons/fi';
import { RiArrowDownSLine } from 'react-icons/ri';
import Image from 'next/image';
import logo from '../../public/assets/images/Cinebee-logo-text.png';

interface Props {}

export const TopNav = (props: Props) => {
	const { profile, logout } = useAuth();
	const router = useRouter();

	const handleLogoutClick = async () => {
		await logout();
		router.push('/');
	};

	return (
		<Navbar
			collapseOnSelect
			expand="lg"
			bg="dark"
			variant="dark"
			className="shadow topnav"
			fixed="top"
		>
			<Container>
				<Link href="/" passHref>
					<Navbar.Brand className="h4 mb-0 logo-text">
						<Image src={logo} alt="cinebee-logo" height={30} width={143.25}/>
					</Navbar.Brand>
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
								<div className="d-flex align-items-center">
									Góc điện ảnh <RiArrowDownSLine />
								</div>
							}
							id="basic-nav-dropdown"
						>
							<NavDropdown.Item href="#action/3.1">Thể loại phim</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.2">Diễn viên</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.3">Đạo diễn</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.3">Tin điện ảnh</NavDropdown.Item>
						</NavDropdown>
						<Link href="/bai-viet" passHref>
							<Nav.Link href="#pricing">Bài viết</Nav.Link>
						</Link>
					</Nav>
					<Nav>
						{profile ? (
							<>
								<div>
									<NavDropdown
										title={
											<div className="d-flex align-items-center">
												<FaRegUser className="mb-0 mr-1" />
												{profile.username}
											</div>
										}
										id="user-action-dropdown"
										className="text-left"
									>
										<Link href="/accounts/profile" passHref>
											<NavDropdown.Item className="d-flex align-items-center">
												<AiOutlineInfo className="mb-0 mr-1" />
												Tài khoản
											</NavDropdown.Item>
										</Link>
										<NavDropdown.Item
											onClick={handleLogoutClick}
											className="d-flex align-items-center"
										>
											<FiLogOut className="mb-0 mr-1" />
											Đăng xuất
										</NavDropdown.Item>
									</NavDropdown>
								</div>
							</>
						) : (
							<Link href="/accounts/login" passHref>
								<Nav.Link className="d-flex align-items-center">
									<FaRegUser className="mb-0 mr-1" />
									Đăng nhập
								</Nav.Link>
							</Link>
						)}
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};
