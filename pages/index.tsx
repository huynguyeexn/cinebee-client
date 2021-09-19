// CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import { BannerHeader, PageTitle } from 'components';
import { MainLayout } from 'layouts';
import type { NextPage } from 'next';
import Image from 'next/image';
import { Badge, Col, Container, Row } from 'react-bootstrap';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
	return (
		<MainLayout>
			<section className="mb-5">
				<BannerHeader />
			</section>
			<Container>
				<section>
					<PageTitle title="Phim đang chiếu" />
					<Row xs={2} md={3} lg={4} xl={5}>
						<Col>
							<div className="movie-card">
								<div className="movie-thumb">
									<img
										src="https://www.themoviedb.org/t/p/original/78wC6ZWhTlqaCNL0rS7jl7dAV85.jpg"
										alt=""
									/>
								</div>
								<div className="movie-summary">
									<Badge bg="success">C16</Badge>

									<h5>Vemon</h5>
									<p>Khởi chiếu: 20/07/2021</p>
									<p>100 phút</p>
								</div>
							</div>
						</Col>
						<Col>
							<div className="movie-card">
								<div className="movie-thumb">
									<img
										src="https://www.themoviedb.org/t/p/original/sdcMDlrh0TWPY04fLTtKXnM9lmj.jpg"
										alt=""
									/>
								</div>
								<div className="movie-summary">
									<Badge bg="success">C16</Badge>

									<h5>Tên phim nằm ở đây</h5>
									<p>Khởi chiếu: 20/07/2021</p>
									<p>100 phút</p>
								</div>
							</div>
						</Col>
						<Col>
							<div className="movie-card">
								<div className="movie-thumb">
									<img
										src="https://www.themoviedb.org/t/p/original/ayKhR40ClDEivfmubfcXeyNPo2r.jpg"
										alt=""
									/>
								</div>
								<div className="movie-summary">
									<Badge bg="success">C16</Badge>

									<h5>Tên phim nằm ở đây</h5>
									<p>Khởi chiếu: 20/07/2021</p>
									<p>100 phút</p>
								</div>
							</div>
						</Col>
						<Col>
							<div className="movie-card">
								<div className="movie-thumb">
									<img
										src="https://www.themoviedb.org/t/p/original/qg82Yh0ruw73DBtE2JLaIufIDmT.jpg"
										alt=""
									/>
								</div>
								<div className="movie-summary">
									<Badge bg="success">C16</Badge>

									<h5>Tên phim nằm ở đây</h5>
									<p>Khởi chiếu: 20/07/2021</p>
									<p>100 phút</p>
								</div>
							</div>
						</Col>
						<Col>
							<div className="movie-card">
								<div className="movie-thumb">
									<img
										src="https://www.themoviedb.org/t/p/original/7HdoUIMktAEyyJU8oUsB4IEl4Gc.jpg"
										alt=""
									/>
								</div>
								<div className="movie-summary">
									<Badge bg="success">C16</Badge>

									<h5>Tên phim nằm ở đây</h5>
									<p>Khởi chiếu: 20/07/2021</p>
									<p>100 phút</p>
								</div>
							</div>
						</Col>
						<Col>
							<div className="movie-card">
								<div className="movie-thumb">
									<img
										src="https://www.themoviedb.org/t/p/original/5boXtxQjExJ7EsVvqICt0vZTGRC.jpg"
										alt=""
									/>
								</div>
								<div className="movie-summary">
									<Badge bg="success">C16</Badge>

									<h5>Tên phim nằm ở đây</h5>
									<p>Khởi chiếu: 20/07/2021</p>
									<p>100 phút</p>
								</div>
							</div>
						</Col>
						<Col>
							<div className="movie-card">
								<div className="movie-thumb">
									<img
										src="https://www.themoviedb.org/t/p/original/9Nf2Iw0Eu4QRbMpgMHyKhjUZ2EL.jpg"
										alt=""
									/>
								</div>
								<div className="movie-summary">
									<Badge bg="success">C16</Badge>

									<h5>Tên phim nằm ở đây</h5>
									<p>Khởi chiếu: 20/07/2021</p>
									<p>100 phút</p>
								</div>
							</div>
						</Col>
						<Col>
							<div className="movie-card">
								<div className="movie-thumb">
									<img
										src="https://www.themoviedb.org/t/p/original/aHgZkEleEq1mewQnSWKd9rkGSRk.jpg"
										alt=""
									/>
								</div>
								<div className="movie-summary">
									<Badge bg="success">C16</Badge>

									<h5>Tên phim nằm ở đây</h5>
									<p>Khởi chiếu: 20/07/2021</p>
									<p>100 phút</p>
								</div>
							</div>
						</Col>
						<Col>
							<div className="movie-card">
								<div className="movie-thumb">
									<img
										src="https://www.themoviedb.org/t/p/original/80x0HZxqkbLwktqMlJxUUewYb0U.jpg"
										alt=""
									/>
								</div>
								<div className="movie-summary">
									<Badge bg="success">C16</Badge>

									<h5>Tên phim nằm ở đây</h5>
									<p>Khởi chiếu: 20/07/2021</p>
									<p>100 phút</p>
								</div>
							</div>
						</Col>
						<Col>
							<div className="movie-card">
								<div className="movie-thumb">
									<img
										src="https://www.themoviedb.org/t/p/original/xBE40nSW3BAiwkwvjuqk7hNmBxz.jpg"
										alt=""
									/>
								</div>
								<div className="movie-summary">
									<Badge bg="success">C16</Badge>

									<h5>Tên phim nằm ở đây</h5>
									<p>Khởi chiếu: 20/07/2021</p>
									<p>100 phút</p>
								</div>
							</div>
						</Col>
					</Row>
				</section>
			</Container>
		</MainLayout>
	);
};

export default Home;
