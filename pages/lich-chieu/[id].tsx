import { useRouter } from 'next/router';
import React from 'react';
import { Container } from 'react-bootstrap';

interface Props {}

const DatLichPage = (props: Props) => {
	const router = useRouter();
	const { id } = router.query;
	return <Container>Showtime ID: {id}</Container>;
};

export default DatLichPage;
