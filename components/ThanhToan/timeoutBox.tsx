import { orderApi } from 'api-client';
import { Order } from 'interfaces';
import moment from 'moment';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { clearSession, getSession } from 'utils';

interface Props {
	timeout: string;
}

const TimeoutBox = ({ timeout }: Props) => {
	const router = useRouter();
	const [time, setTime] = React.useState(300);
	const [show, setShow] = React.useState(false);

	useEffect(() => {
		const timer = setTimeout(() => {
			if (time > 0) {
				setTime(moment(timeout).diff(moment(), 'seconds'));
			} else {
				setShow(true);
			}
		}, 1000);

		return () => clearTimeout(timer);
	});

	const result = moment()
		.startOf('day')
		.seconds(time >= 0 ? time : 0)
		.format('mm:ss');

	const handleClose = () => {
		clearSession();
		router.push('/lich-chieu');
	};

	const handleDeleteOrder = async () => {
		const { id }: Order = getSession('order');

		console.log('delete order');
		clearSession();

		await orderApi.cancelOrder(id as number);
	};

	return (
		<>
			<h2>{result}</h2>
			<Modal show={show} onHide={handleClose} onShow={handleDeleteOrder}>
				<Modal.Header closeButton>
					<Modal.Title>Hết thời gian chờ</Modal.Title>
				</Modal.Header>
				<Modal.Body>Bạn đã hết thời gian chờ để đặt vé.</Modal.Body>
				<Modal.Footer>
					<Button variant="primary" onClick={handleClose}>
						Đóng
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
};

export default TimeoutBox;
