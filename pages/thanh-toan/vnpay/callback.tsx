import { orderApi } from 'api-client';
import { VNPAY_ERROR_CODE, VNPAY_ERROR_LIST } from 'constant/vnpay';
import { Order, ResponseData } from 'interfaces';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { Alert, Button, Container } from 'react-bootstrap';
import { clearSession, ToastError } from 'utils';

import QRImage from 'react-qr-image'

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
			<h1>Kết quả thanh toán</h1>
			{status && (
				<Alert variant={status?.code === '00' ? 'success' : 'danger'}>
					{status?.message || 'Không xác định'}
				</Alert>
			)}
			{verifyCode && <QRImage text={verifyCode} />}
			<Button onClick={() => router.push('/')}>Quay về</Button>
		</Container>
	);
};

export default VNPayCallbackPage;
