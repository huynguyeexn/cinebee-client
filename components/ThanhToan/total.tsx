import { OrderPayload, orderApi } from 'api-client';
import { Order, Showtime } from 'interfaces';
import { useRouter } from 'next/router';
import React from 'react';
import { Button, Card, Col, ListGroup, ListGroupItem, Row } from 'react-bootstrap';
import { formatVND } from 'utils';

interface Props {
	showtime: Showtime;
	seats: number[];
}

export const Total = ({ showtime, seats }: Props) => {
	const router = useRouter();
	const price = showtime.room.price;

	// TODO: Voucher
	// const [discount, setDiscount] = React.useState('0');
	// const [isOpenModal, setIsOpenModal] = React.useState(false);

	// TODO: Voucher
	// const handleAddButtonClick = () => {
	// 	setIsOpenModal(true);
	// };
	// const handleTotalClick = () => {
	// 	setIsOpenModal(false);
	// 	setDiscount('10.000');
	// 	price =
	// 		Number(price.substring(0, price.length - 2).replace(/\./g, '')) -
	// 		Number(discount.replace(/\./g, ''));
	// };

	const handleThanhToanClick = async () => {
		const { id: order_code } =
			typeof window !== 'undefined' && JSON.parse(window.sessionStorage.getItem('order') || '{}');
		if (order_code) {
			router.push(`/[showtime]/thanh-toan`, `/${showtime.id}/thanh-toan`);
		} else {
			const payload: OrderPayload = {
				showtime_id: showtime.id as number,
				seats: seats as number[],
			};

			const response = await orderApi.createOrder(payload);
			const order: Order = response.data;
			window.sessionStorage.setItem('order', JSON.stringify(order));
			router.push(`/[showtime]/thanh-toan`, `/${showtime.id}/thanh-toan`);
		}
	};

	const handleCancelClick = () => {
		window.sessionStorage.clear();
		router.push('/');
	};

	return (
		<div className="mt-5 w-100 total">
			<Row className="justify-content-end">
				<Col lg={5} md={6}>
					<Card>
						<ListGroup className="d-flex flex-row mb-2">
							<ListGroupItem className="d-flex align-items-center rounded justify-content-start float-left p-0 w-50">
								<h5 className="mb-0">Tổng Tiền :</h5>
							</ListGroupItem>
							<ListGroupItem className="p-0 border-0 d-flex align-items-center rounded justify-content-end float-right w-50">
								<span>{formatVND(price * seats.length)}</span>
							</ListGroupItem>
						</ListGroup>
						{/* TODO: Voucher */}
						{/* <ListGroup className="d-flex flex-row mb-2">
							<ListGroupItem className="d-flex align-items-center rounded justify-content-start float-left p-0 w-50">
								<h5 className="mb-0">khuyến Mãi :</h5>
							</ListGroupItem>
							<ListGroupItem className="p-0 border-0 d-flex align-items-center rounded justify-content-end float-right w-50">
								<span>{discount}</span> đ
							</ListGroupItem>
						</ListGroup> */}
						<ListGroup className="d-flex flex-row mb-2">
							<ListGroupItem className="d-flex align-items-center rounded justify-content-start float-left p-0 w-50">
								<h5 className="mb-0">Tổng Cộng :</h5>
							</ListGroupItem>
							<ListGroupItem className="p-0 border-0 d-flex align-items-center rounded justify-content-end float-right w-50 tong">
								<span>{formatVND(price * seats.length)}</span>
							</ListGroupItem>
						</ListGroup>

						{/* TODO: Voucher */}
						{/* <ListGroup className="d-flex flex-row justify-content-end mb-2">
							<button onClick={handleAddButtonClick}>
								<FaSalesforce className="mr-1" /> Dùng mã khuyến mãi
							</button>
						</ListGroup> */}

						<ListGroup className="d-flex flex-row justify-content-end">
							<Button variant="outline-primary" className="mr-2" onClick={handleCancelClick}>Hủy bỏ</Button>
							<Button onClick={handleThanhToanClick} variant="primary">Thanh toán</Button>
						</ListGroup>
					</Card>
				</Col>

				{/* TODO: Voucher */}
				{/* <Modal show={isOpenModal} className="payment--modal">
					<div className="d-flex justify-content-end pt-3 pr-3">
						<a onClick={() => setIsOpenModal(false)}>
							<AiOutlineClose />
						</a>
					</div>
					<div className="p-4">
						<h4>Nhập mã giảm giá</h4>
						<input type="text" className="discount" />
						<input
							className="mt-2 px-3 use"
							onClick={handleTotalClick}
							type="submit"
							value="Áp Dụng"
						/>
					</div>
				</Modal> */}
			</Row>
		</div>
	);
};
