import { TabTheoPhim } from 'components/LichChieu';
import React from 'react';
import { Container, Nav, Tab } from 'react-bootstrap';
interface Props {}

const LichChieuPage = () => {
	return (
		<Container className="py-4 showtime-page">
			<Tab.Container id="left-tabs-example" defaultActiveKey="theo-phim">
				<Nav variant="tabs"></Nav>
				<Tab.Content className="my-4">
					<TabTheoPhim tabKey="theo-phim" />
				</Tab.Content>
			</Tab.Container>
		</Container>
	);
};

export default LichChieuPage;
