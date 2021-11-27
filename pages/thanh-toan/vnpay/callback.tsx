import { useRouter } from 'next/router';
import React from 'react';

interface Props {}

const VNPayCallbackPage = (props: Props) => {
	const router = useRouter();

	const {
		vnp_Amount: amount,
		vnp_BankCode: bankCode,
		vnp_BankTranNo: bankTranNo,
		vnp_CardType: cardType,
		vnp_OrderInfo: orderInfo,
		vnp_PayDate: payDate,
		vnp_ResponseCode: responseCode,
		vnp_SecureHash: secureHash,
		vnp_TmnCode: tmnCode,
		vnp_TransactionNo: transactionNo,
		vnp_TransactionStatus: transactionStatus,
		vnp_TxnRef: orderTempId,
	} = router.query;

	console.log(router.query);

	return <div></div>;
};

export default VNPayCallbackPage;
