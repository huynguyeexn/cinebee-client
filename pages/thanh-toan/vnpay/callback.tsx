import { orderApi } from 'api-client';
import { VNPAY_ERROR_CODE, VNPAY_ERROR_LIST } from 'constant/vnpay';
import { Order, ResponseData } from 'interfaces';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { Alert, Button, Container, Row } from 'react-bootstrap';
import { clearSession, ToastError } from 'utils';

import QRImage from 'qrcode.react'

interface Props {}

const VNPayCallbackPage = (props: Props) => {
	const router = useRouter();
	const [verifyCode, setVerifyCode] = React.useState('');
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
					const response: ResponseData<Order>  = await orderApi.confirmOrder(Number(order_id));
					setVerifyCode(response.data.verify_code);
				} catch (error) {
					ToastError("Đã xảy ra lỗi trong quá trình xử lý");
					console.log('Error: confirmOrder', error);
				}
			})()
		} else if (responseCode && VNPAY_ERROR_LIST.includes(responseCode as string)) {
			try {
				orderApi.cancelOrder(Number(order_id));
			} catch (error) {}
		}
		clearSession();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [responseCode]);

	return (
		<Container className="mt-5">
			<Row className='payment-success--header'>
				<h1 className='mt-5'>Kết quả thanh toán</h1>
				<Button onClick={() => router.push('/')}>Quay về</Button>
			</Row>
			{status && (
				<Alert variant={status?.code === '00' ? 'success' : 'danger'}>
					{status?.message || 'Không xác định'}
				</Alert>
			)}
			<Row className='payment-success--qr d-flex justify-content-center align-items-center'>
				{verifyCode && <QRImage value={verifyCode} />}
				<h4 className='mt-2'>AHDEKZBF</h4>
			</Row>
			<Row className='payment-success--info mt-5'>
				<div className='w-100 d-flex'><div className='thongtin'>Mã đặt vé: </div> <span>291276</span></div>
				<div className='w-100 d-flex'><div className='thongtin'>Rạp: </div> <span>CINEBEE</span></div>
				<div className='w-100 d-flex'><div className='thongtin'>Thông tin phim: </div><span>ME CHONG</span></div>
				<div className='w-100 d-flex'><div className='thongtin'>Suất chiếu: </div><span>21/09/2001</span></div>
				<div className='w-100 d-flex'><div className='thongtin'>Thông tin vé:</div> <span>qwertyuiopasdfghjklzx</span></div>
				<div className='w-100 d-flex'><div className='thongtin'>Đồ ăn và thức uống: <span></span></div></div>
				<div className='w-100 d-flex'><div className='thongtin'>Tổng cộng: </div><span>45.000đ</span></div>
			</Row>
			
		</Container>
	);
};

export default VNPayCallbackPage;
