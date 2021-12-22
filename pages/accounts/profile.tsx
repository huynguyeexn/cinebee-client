import { PageTitle } from 'components';
import { useAuth } from 'hooks';
import React, { useState } from 'react';
import Image from 'next/image';
import { Col, Container, Table, Nav, Row, Tab } from 'react-bootstrap';
import { FaUser } from 'react-icons/fa';
import { MdDateRange, MdEmail } from 'react-icons/md';
import { IoMdHome, IoMdMale, IoMdFemale, IoMdPhonePortrait } from 'react-icons/io';
import { GENDER } from 'constant';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { Order } from 'interfaces';
import { customerApi } from 'api-client/customerApi';
import { formatDateWithDay, formatVND } from 'utils';

interface Props {}

const ProfilePage = (props: Props) => {
	const { profile } = useAuth();
	const router = useRouter();
	const [order, setOrder] = useState<Order[]>([]);
	const [total, setTotal] = useState(0);
	const [movieLoading, setMovieLoading] = React.useState(false);

	if (typeof window !== 'undefined' && !profile) {
		router.push('/');
	}

	React.useEffect(() => {
		(async () => {
			setMovieLoading(true);
			try {
				const response = await customerApi.getAllOrderById(profile.id);
				const orders = response.data;;
				setOrder(orders as Order[]);
				setTotal(orders.reduce((total, order) => total + Number(order.total), 0));
			} catch (error) {
				console.error('Failed to get movies playing: ', error);
			}
			setMovieLoading(false);
		})();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<Container
			className="justify-content-center align-items-center"
			style={{ minHeight: '80vh', width: '100%' }}
		>
			<PageTitle title="Thông tin tài khoản" />
			{/* <Auth>{JSON.stringify(profile)}</Auth>; */}
			<div className="bg">
				<Tab.Container id="left-tabs-example" defaultActiveKey="first">
					<Row>
						<Col lg={3}>
							<div className="bg-left">
								<Nav variant="pills" className="flex-column">
									<Nav.Item>
										<Nav.Link eventKey="first">Thông tin tài khoản</Nav.Link>
									</Nav.Item>
									<Nav.Item>
										<Nav.Link eventKey="second">Lịch sử mua vé</Nav.Link>
									</Nav.Item>
								</Nav>
							</div>
						</Col>
						<Col lg={9}>
							<Tab.Content>
								<Tab.Pane eventKey="first">
									<div className="padding">
										<div className="avatar">
											<Image
												src="https://www.themoviedb.org/t/p/original/bZnOioDq1ldaxKfUoj3DenHU7mp.jpg"
												alt=""
												layout="fill"
												objectFit="cover"
												unoptimized={true}
											></Image>
										</div>
										<div className="infor-user">
											<div className="form-group d-flex">
												{/* <label htmlFor="username"><FaUser /></label>
												<input type="text" name="username" className="col-md-12 col-form-label position" value={profile?.username}/> */}
												<div className="col-2">
													<span>
														<FaUser />
													</span>
												</div>
												<div className="col-10">
													<p> {profile?.username}</p>
												</div>
											</div>
											<div className="form-group d-flex">
												{/* <label htmlFor="username"><IoMdPhonePortrait /></label>
												<input type="text" name="phone"  className="col-md-12 col-form-label" value={profile?.phone}/> */}
												<div className="col-2">
													<span>
														<IoMdPhonePortrait />
													</span>
												</div>
												<div className="col-10">
													<p> {profile?.phone}</p>
												</div>
											</div>
											<div className="form-group d-flex">
												{/* <label htmlFor="username"><MdEmail /></label>
												<input type="email" name="email"  className="col-md-12 col-form-label" value={profile?.email}/> */}
												<div className="col-2">
													<span>
														<MdEmail />
													</span>
												</div>
												<div className="col-10">
													<p>{profile?.email}</p>
												</div>
											</div>
											<div className="form-group d-flex">
												{/* <label htmlFor="username"><IoMdHome /></label>
												<input type="text" name="address"  className="col-md-12 col-form-label" value={profile?.address}/> */}
												<div className="col-2">
													<span>
														<IoMdHome />
													</span>
												</div>
												<div className="col-10">
													<p>{profile?.address}</p>
												</div>
											</div>
											<div className="form-group d-flex">
												{/* <label htmlFor="username"><MdDateRange /></label>
												<input type="date" name="birthday"  className="col-md-12 col-form-label" value={profile?.birthday}/> */}
												<div className="col-2">
													<span>
														<MdDateRange />
													</span>
												</div>
												<div className="col-10">
													<p> {profile?.birthday}</p>
												</div>
											</div>
											<div className="form-group d-flex">
												<div className="col-2"></div>
												<div className="col-10">
													<p>Giới tính: {GENDER[profile?.gender]}</p>{' '}
												</div>
											</div>
											<div className="row col">
												<div className="col-md-12 col-form-label">
													{/* 													<div className="form-check form-check-inline">
															<input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value='1' checked/>
															<label className="form-check-label"><IoMdMale /></label>
														</div>
														<div className="form-check form-check-inline">
															<input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value='2' />
															<label className="form-check-label"><IoMdFemale /></label>
														</div> */}
												</div>
											</div>
										</div>
									</div>
								</Tab.Pane>
								<Tab.Pane eventKey="second">
									<h2 className="mt-3">Lịch sử giao dịch</h2>
									<Table
										striped
										bordered
										hover
										variant="dark"
										className="mt-4 giao-dich--table_giaodich"
									>
										<thead>
											<tr>
												<th>Mã vé</th>
												<th className="ngay">Ngày</th>
												<th className="movie">Phim</th>
												<th>Tổng tiền</th>
												<th className="qr_code"></th>
											</tr>
										</thead>
										<tbody>
											{order &&
												order.map((order, idx) => (
													<tr key={idx}>
														<td>#{order.id}</td>
														<td>{formatDateWithDay(order.booking_at)}</td>
														<td className="movie">{order.showtime.movie.name}</td>
														<td>{formatVND(order.showtime.room.price)}</td>
														<td>
															<Link href={`/accounts/${order.id}`}>Xem chi tiết</Link>
														</td>
													</tr>
												))}
											<tr>
												<td className="text_total">Tổng</td>
												<td></td>
												<td></td>
												<td className="text_total">{formatVND(total)}</td>
												<td></td>
											</tr>
										</tbody>
									</Table>
								</Tab.Pane>
							</Tab.Content>
						</Col>
					</Row>
				</Tab.Container>
			</div>
		</Container>
	);
};

export default ProfilePage;
