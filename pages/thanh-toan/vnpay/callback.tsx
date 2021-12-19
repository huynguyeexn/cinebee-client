import { orderApi } from 'api-client';
import { VNPAY_ERROR_CODE, VNPAY_ERROR_LIST } from 'constant/vnpay';
import { Order, ResponseData } from 'interfaces';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { Alert, Button, Card, Col, Container, Row } from 'react-bootstrap';
import { clearSession, formatVND, ToastError } from 'utils';

import QRImage from 'qrcode.react';
import moment from 'moment';

interface Props {}

const VNPayCallbackPage = (props: Props) => {
	const router = useRouter();
	const [verifyCode, setVerifyCode] = React.useState('');
	const [order, setOrder] = React.useState<Order | null>(null);
	const {
		// vnp_Amount: amount,
		// vnp_BankCode: bankCode,
		// vnp_BankTranNo: bankTranNo,
		// vnp_CardType: cardType,
		// vnp_OrderInfo: orderInfo,
		// vnp_PayDate: payDate,
		vnp_ResponseCode: responseCode,
		// vnp_SecureHash: secureHash,
		// vnp_TmnCode: tmnCode,
		// vnp_TransactionNo: transactionNo,
		// vnp_TransactionStatus: transactionStatus,
		vnp_TxnRef: order_id,
	} = router.query;
	const status = VNPAY_ERROR_CODE.find((item) => item.code === responseCode);

	useEffect(() => {
		if (responseCode === '00') {
			(async () => {
				try {
					const response: ResponseData<Order> = await orderApi.confirmOrder(Number(order_id));
					setOrder(response.data);
					setVerifyCode(response.data.verify_code);
				} catch (error) {
					ToastError('Đã xảy ra lỗi trong quá trình xử lý');
					console.log('Error: confirmOrder', error);
				}
			})();
		} else if (responseCode && VNPAY_ERROR_LIST.includes(responseCode as string)) {
			try {
				orderApi.cancelOrder(Number(order_id));
			} catch (error) {}
		}
		clearSession();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [responseCode]);

	return (
		<Container className="mt-5 py-5 mb-5">
			<Card>
				<Card.Body className="p-5">
					<Row className="">
						<Col sm={6}>
							<h1>Kết quả thanh toán</h1>
						</Col>
						<Col sm={6}>
							<Button className="float-right mt-2" onClick={() => router.push('/')}>
								Quay về
							</Button>
						</Col>
						{status && (
							<Col sm={12}>
								<Alert variant={status?.code === '00' ? 'success' : 'danger'}>
									{status?.message || 'Không xác định'}
								</Alert>
							</Col>
						)}
					{order && (
						<>
							<Col sm={6} className="payment-success--qr text-center">
								<h4 className="text-center">Mã nhận vé</h4>
								<div className="d-flex justify-content-center align-items-center">
									{verifyCode && <QRImage value={verifyCode} size={200} style={{width: "200px"}}/>}
								</div>
								<h4 className="mt-2">{verifyCode}</h4>
							</Col>
							<Col sm={6} className="payment-success--info">
								<div className="w-100 d-flex">
									<div className="thongtin">Mã đơn hàng: </div>
									<span>{order.id}</span>
								</div>
								<div className="w-100 d-flex">
									<div className="thongtin">Rạp: </div> <span>{order.showtime.room.name}</span>
								</div>
								<div className="w-100 d-flex">
									<div className="thongtin">Thông tin phim: </div>
									<span>{order.showtime.movie.name}</span>
								</div>
								<div className="w-100 d-flex">
									<div className="thongtin">Suất chiếu: </div>
									<span>{moment(order.showtime.start).format('HH:mm - DD/MM/YYYY')}</span>
								</div>
								<div className="w-100 d-flex">
									<div className="thongtin">Ghế số:</div>{' '}
									<span>{order.movieTickets.map((ticket) => ticket.seat_name).join(', ')}</span>
								</div>
								{/* <div className="w-100 d-flex">
							<div className="thongtin">
								Đồ ăn và thức uống: <span></span>
							</div>
						</div> */}
								<div className="w-100 d-flex">
									<div className="thongtin">Tổng cộng: </div>
									<span>{formatVND(order.total)}</span>
								</div>
								<div className="w-100 d-flex">
									<p className='mt-2'>Mã nhận vé sẽ được gửi về email của bạn, vui lòng lưu lại mã đặt vé khi cần thiết!</p>
								</div>
							</Col>
						</>
					)}
						</Row>
				</Card.Body>
			</Card>
		</Container>
	);
};

export default VNPayCallbackPage;
