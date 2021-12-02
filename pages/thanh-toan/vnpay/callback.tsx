import { orderApi } from 'api-client';
import { VNPAY_ERROR_CODE } from 'constant/vnpay';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { Alert, Button, Container } from 'react-bootstrap';

interface Props {}

const VNPayCallbackPage = (props: Props) => {
	const router = useRouter();
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
		if (typeof window !== 'undefined') {
			window.sessionStorage.clear();
			if (status?.code === '00') {
				orderApi.confirmOrder(Number(order_id));
			}
		}
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	return (
		<Container className="mt-5">
			<h1>Kết quả thanh toán</h1>
			{status && (
				<Alert variant={status?.code === '00' ? 'success' : 'danger'}>
					{status?.message || 'Không xác định'}
				</Alert>
			)}
			<Button onClick={() => router.push('/')}>Quay về</Button>
		</Container>
	);
};

export default VNPayCallbackPage;
