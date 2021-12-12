import { ListBlog,PageTitle } from 'components';
import React from 'react';
import { Col, Container, Row, Spinner,Image } from 'react-bootstrap';

interface Props {}

const BaiVietPage = (props: Props) => {
	
	return (
		<Container className="py-4">
			<PageTitle title="Bài viết" moreLabel="Bài viết" moreUrl="/bai-viet" />
			<ListBlog />
		</Container>
	);
};

export default BaiVietPage;

