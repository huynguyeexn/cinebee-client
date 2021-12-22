import { blogApi } from 'api-client/blogApi';
import { categoryApi } from 'api-client/categoryApi';
import parse from 'html-react-parser';
import { Blog } from 'interfaces/blog';
import moment from 'moment';
import { useRouter } from 'next/router';
import React from 'react';
import { Button, Card, Col, Container, Image, Row, Spinner } from 'react-bootstrap';
import Link from 'next/link';

interface Props {}

const TinTucDetailPage = (props: Props) => {
	const router = useRouter();
	const { slug } = router.query;
	const [blog, setBlog] = React.useState<Blog>();
	const [movieLoading, setMovieLoading] = React.useState(false);
	const [blogs, setBlogs] = React.useState<Blog[]>([]);
	React.useEffect(() => {
		if (slug) {
			(async () => {
				setMovieLoading(true);
				try {
					const response: any = await blogApi.getById(slug);
					setBlog(response as Blog);
				} catch (error) {
					console.error('Failed to get movies playing: ', error);
				}
				setMovieLoading(false);
			})();
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [slug]);

	React.useEffect(() => {
		if (blog) {
			(async () => {
				try {
					const Blogs = await categoryApi.getBlogByCategory(blog?.category?.id as number);
					setBlogs(Blogs.data as Blog[]);
				} catch (error) {
					console.error('Failed to get movies playing: ', error);
				}
			})();
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [blog]);

	return (
		<section
			className={`movie-detail ${
				movieLoading && 'd-flex justify-content-center align-items-center p-5'
			}`}
		>
			{movieLoading ? (
				<Spinner animation="border" variant="primary" />
			) : (
				<Container>
					<Row className="tin-tuc-detail--content">
						<Col lg={8} className="mt-5">
							<Button variant="secondary" className="mb-3" onClick={() => router.back()}>
								Quay về
							</Button>
							<Card>
								<Card.Header>
									<h2>{blog?.title}</h2>
									<div className="d-flex">
										<p>
											{blog?.category?.name}
											<span>-</span> {blog?.author?.username}
											<span>-</span> {moment(blog?.date).fromNow()}
										</p>
									</div>
								</Card.Header>
								<Card.Body>{parse(String(blog?.content))}</Card.Body>
							</Card>
						</Col>
						<Col lg={4} className="mt-5">
							<Card className="tin-tuc--category">
								<Card.Header className="tin-tuc--title-blog">
									<h3>BÀI VIẾT LIÊN QUAN</h3>
								</Card.Header>
								<Card.Body>
									{blogs &&
										blogs.map((blog, idx) => (
											<Card key={idx} className="tin-tuc-detail--blog d-flex flex-row">
												<Col lg={4} className="p-0 image">
													<Image
														alt=""
														src="https://www.cinestar.com.vn/pictures/Tin%20t%E1%BB%A9c/conan/conan2.jpg"
													></Image>
												</Col>
												<Col lg={8} className="p-0 content">
													<Card.Body>
														<Card.Title>
															<Link href={`/tin-tuc/${blog?.id}`}>{blog.title}</Link>
														</Card.Title>
														<div className="d-flex">
															<p>
																{blog?.category?.name} <span>-</span> {moment(blog?.date).fromNow()}
															</p>
														</div>
													</Card.Body>
												</Col>
											</Card>
										))}
								</Card.Body>
							</Card>
						</Col>
					</Row>
				</Container>
			)}
		</section>
	);
};

export async function getServerSideProps() {
	return {
		props: {},
	};
}

export default TinTucDetailPage;
