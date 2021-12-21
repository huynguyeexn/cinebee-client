import { blogApi } from 'api-client/blogApi';
import { categoryApi } from 'api-client/categoryApi';
import { useAuth } from 'hooks';
import { Blog } from 'interfaces/blog';
import { Category, ListParams, PaginationParams } from 'interfaces';
import { useRouter } from 'next/router';
import React from 'react';
import {
	Card,
	Col,
	Container,
	Image,
	ListGroup,
	ListGroupItem,
	Pagination,
	Row,
	Spinner,
} from 'react-bootstrap';
import ReactPaginate from 'react-paginate';

interface Props {}

const TinTucPage = (props: Props) => {
	const [blogs, setBlogs] = React.useState<Blog[]>([]);
	const [blogLoading, setBlogLoading] = React.useState(false);
	const [catLoading, setCatLoading] = React.useState(false);
	const [categories, setCategories] = React.useState<Category[]>([]);
	const [categorySelected, setCategorySelected] = React.useState<number>(0);
	const [pagination, setPagination] = React.useState<PaginationParams>({});
	const router = useRouter();
	const { page, limit } = router.query;
	const { profile } = useAuth();

	React.useEffect(() => {
		(async () => {
			setBlogLoading(true);
			try {
				const params: ListParams = {
					page: Number(`${page}`) || 1,
					per_page: Number(`${limit}`) || 10,
				};

				const Blogs = await blogApi.getBlogs(params);
				setPagination(Blogs.pagination as PaginationParams);
				setBlogs(Blogs.data as Blog[]);
			} catch (error) {
				console.error('Failed to get movies playing: ', error);
			}
			setBlogLoading(false);
		})();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	React.useEffect(() => {
		(async () => {
			setCatLoading(true);
			try {
				const categories: any = await categoryApi.getCategory();
				setCategories(categories.data as Category[]);
			} catch (error) {
				console.error('Failed to get movies playing: ', error);
			}
			setCatLoading(false);
		})();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const handleBlogDetail = async (id: number) => {
		// if (!profile) {
		// 	return router.push('/dang-nhap');
		// }
		router.push(`/tin-tuc/${id}`);
	};

	const handleCategory = async (id: number) => {
		(async () => {
			try {
				if (id == 0) {
					const params: ListParams = {
						page: Number(`${page}`) || 1,
						per_page: Number(`${limit}`) || 10,
					};
					const Blogs = await blogApi.getBlogs(params);
					setBlogs(Blogs.data as Blog[]);
				} else {
					const category = await categoryApi.getBlogByCategory(id as number);
					setBlogs(category.data as Blog[]);
				}
				setCategorySelected(id as number);
			} catch (error) {
				console.error('Failed to get movies playing: ', error);
			}
		})();
	};

	const handlePage = async ({ selected }: { selected: number }) => {
		(async () => {
			setBlogLoading(true);
			try {
				const params: ListParams = {
					page: selected + 1 || 1,
					per_page: Number(`${limit}`) || 10,
				};

				const Blogs = await blogApi.getBlogs(params);
				setPagination(Blogs.pagination as PaginationParams);
				setBlogs(Blogs.data as Blog[]);
			} catch (error) {
				console.error('Failed to get movies playing: ', error);
			}
			setBlogLoading(false);
		})();
	};

	return (
		<section className={`movie-detail`}>
			<Container>
				<Row className="w-100 d-flex justify-content-center align-items-center">
					<h2 className="text-center tin-tuc--title mt-5">TIN TỨC</h2>
				</Row>
				<Row>
					<Col lg={9}>
						<Card>
							<Card.Header className="tin-tuc--title-blog">
								<h3>MỚI NHẤT</h3>
							</Card.Header>
							<Card.Body
								className={` ${
									blogLoading && 'd-flex justify-content-center align-items-center p-5'
								}`}
							>
								{blogLoading ? (
									<Spinner animation="border" variant="primary" />
								) : (
									<>
										{blogs &&
											blogs.map((blog, idx) => (
												<Card key={idx} className="tin-tuc--blog d-flex flex-row">
													<Col lg={4} className="p-0 image">
														<Image
															alt=""
															src="https://www.cinestar.com.vn/pictures/Tin%20t%E1%BB%A9c/conan/conan2.jpg"
														></Image>
													</Col>
													<Col lg={8} className="p-0 content">
														<Card.Body>
															<Card.Title className="cursor-pointer" onClick={() => handleBlogDetail(blog.id as number)}>
																{blog.title}
															</Card.Title>
															<Card.Text>{blog.summary.slice(0, 130)}</Card.Text>
															<div className="footer">
																<span>67 Thích</span>
																<a href="#" className="btn btn-primary">
																	Chia sẻ
																</a>
															</div>
														</Card.Body>
													</Col>
												</Card>
											))}

										<ReactPaginate
											previousLabel="Trước"
											nextLabel="Sau"
											breakLabel="..."
											breakClassName="page-item"
											breakLinkClassName="page-link"
											pageCount={Math.ceil(pagination.total / Number(pagination.per_page))}
											pageRangeDisplayed={3}
											marginPagesDisplayed={2}
											onPageChange={handlePage}
											containerClassName="pagination justify-content-center"
											pageClassName="page-item"
											pageLinkClassName="page-link"
											previousClassName="page-item"
											previousLinkClassName="page-link"
											nextClassName="page-item"
											nextLinkClassName="page-link"
											activeClassName="active"
											// eslint-disable-next-line no-unused-vars
											hrefAllControls
											forcePage={Number(pagination.page) - 1}
										/>
									</>
								)}
							</Card.Body>
						</Card>
					</Col>
					<Col lg={3}>
						<Card className="tin-tuc--category">
							<Card.Header className="tin-tuc--title-blog">
								<h3>CHUYÊN MỤC</h3>
							</Card.Header>
							<Card.Body>
								<ListGroup>
									<ListGroupItem
										className={`category ${categorySelected == 0 ? 'selected' : 'invalid'}`}
										onClick={() => handleCategory(0)}
									>
										Tất cả
									</ListGroupItem>
									{categories &&
										categories.map((category, idx) => (
											<ListGroupItem
												key={idx}
												className={`category 
											${categorySelected == idx + 1 ? 'selected' : 'invalid'}
										`}
												onClick={() => handleCategory(category.id as number)}
											>
												{category.name}
											</ListGroupItem>
										))}
								</ListGroup>
							</Card.Body>
						</Card>
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export async function getServerSideProps() {
	return {
		props: {},
	};
}

export default TinTucPage;
