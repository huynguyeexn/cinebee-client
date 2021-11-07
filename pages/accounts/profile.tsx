import { PageTitle } from 'components';
import { useAuth } from 'hooks';
import React from 'react';
import Image from 'next/image';
import { Col, Container, Table, Nav, Row, Tab } from 'react-bootstrap';
import {FaUser} from 'react-icons/fa';
import {MdDateRange, MdEmail} from 'react-icons/md';
import {IoMdHome, IoMdMale, IoMdFemale, IoMdPhonePortrait} from 'react-icons/io';
import { GENDER } from 'constant';


interface Props {}

const ProfilePage = (props: Props) => {
	const { profile } = useAuth();

	return (
		<Container
			className="justify-content-center align-items-center"
			style={{ minHeight: '80vh' , width: '100%'}}
		>
			<PageTitle title="Thông tin tài khoản" />
			{/* <Auth>{JSON.stringify(profile)}</Auth>; */}
				<div className="bg">
				<Tab.Container id="left-tabs-example" defaultActiveKey="first">
					<Row>
						<Col lg={4}>
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
						<Col lg={8}>
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
											<div className="form-group">
												<label htmlFor="username"><FaUser /></label>
												<input type="text" name="username" className="col-md-12 col-form-label position" value={profile?.username}/>
											</div>
											<div className="form-group">
												<label htmlFor="username"><IoMdPhonePortrait /></label>
												<input type="text" name="phone"  className="col-md-12 col-form-label" value={profile?.phone}/>
											</div>
											<div className="form-group">
												<label htmlFor="username"><MdEmail /></label>
												<input type="email" name="email"  className="col-md-12 col-form-label" value={profile?.email}/>
											</div>
											<div className="form-group">
												<label htmlFor="username"><IoMdHome /></label>
												<input type="text" name="address"  className="col-md-12 col-form-label" value={profile?.address}/>
											</div>
											<div className="form-group">
												<label htmlFor="username"><MdDateRange /></label>
												<input type="date" name="birthday"  className="col-md-12 col-form-label" value={profile?.birthday}/>
											</div>
											<div className="row col">
												<div className="col-md-12 col-form-label">
{/* 														<div className="form-check form-check-inline">
															<input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value='1' checked/>
															<label className="form-check-label"><IoMdMale /></label>
														</div>
														<div className="form-check form-check-inline">
															<input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value='2' />
															<label className="form-check-label"><IoMdFemale /></label>
														</div> */}
														<p>Giới tính: {GENDER[profile.gender]}</p> 
												</div>
											</div>
										</div>
									</div>
								</Tab.Pane>
								<Tab.Pane eventKey="second">
									<Table striped bordered hover variant="dark">
											<thead>
												<tr>
													<th>#</th>
													<th>First Name</th>
													<th>Last Name</th>
													<th>Username</th>
												</tr>
											</thead>
											<tbody>
												<tr>
													<td>1</td>
													<td>Mark</td>
													<td>Otto</td>
													<td>@mdo</td>
												</tr>
												<tr>
													<td>2</td>
													<td>Jacob</td>
													<td>Thornton</td>
													<td>@fat</td>
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
	)
};

export default ProfilePage;
