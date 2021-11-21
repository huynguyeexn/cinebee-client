import { yupResolver } from '@hookform/resolvers/yup';
import { paymentApi, PaymentPayload } from 'api-client/payment';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { Card, Col, Container, Image, ListGroup, ListGroupItem, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { formatVND } from 'utils';

interface Props {}

const ThanhToanChiTietPage = (props: Props) => {
	const router = useRouter();
	const { price } = router.query;
	const [bankSelected, setBankSelected] = useState<string | undefined>();
	const banks = [];
	const number = [
		1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 15, 16, 17, 18, 19, 20, 22, 25, 27, 30, 31, 33, 34,
		35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46,
	];
	const bankList = [
		{
			bankCode: 'VIETCOMBANK',
			label: '',
			logoUrl: 'https://onepay.vn/paygate/assets/img/banklogo/1_logo_full.svg',
		},
		{
			bankCode: 'TECHCOMBANK',
			label: '',
			logoUrl: 'https://onepay.vn/paygate/assets/img/banklogo/2_logo_full.svg',
		},
		{
			bankCode: 'TPBANK',
			label: '',
			logoUrl: 'https://onepay.vn/paygate/assets/img/banklogo/3_logo_full.svg',
		},
		{
			bankCode: 'VIETINBANK',
			label: '',
			logoUrl: 'https://onepay.vn/paygate/assets/img/banklogo/4_logo_full.svg',
		},
		{
			bankCode: 'DONGABANK',
			label: '',
			logoUrl: 'https://onepay.vn/paygate/assets/img/banklogo/6_logo_full.svg',
		},
		{
			bankCode: 'HDBANK',
			label: '',
			logoUrl: 'https://onepay.vn/paygate/assets/img/banklogo/7_logo_full.svg',
		},
		{
			bankCode: 'MBBANK',
			label: '',
			logoUrl: 'https://onepay.vn/paygate/assets/img/banklogo/8_logo_full.svg',
		},
		{
			bankCode: 'MSBANK',
			label: '',
			logoUrl: 'https://onepay.vn/paygate/assets/img/banklogo/10_logo_full.svg',
		},
		{
			bankCode: 'EXIMBANK',
			label: '',
			logoUrl: 'https://onepay.vn/paygate/assets/img/banklogo/11_logo_full.svg',
		},
		{
			bankCode: 'VPBANK',
			label: '',
			logoUrl: 'https://onepay.vn/paygate/assets/img/banklogo/14_logo_full.svg',
		},
		{
			bankCode: 'SACOMBANK',
			label: '',
			logoUrl: 'https://onepay.vn/paygate/assets/img/banklogo/16_logo_full.svg',
		},
		{
			bankCode: 'NAMABANK',
			label: '',
			logoUrl: 'https://onepay.vn/paygate/assets/img/banklogo/17_logo_full.svg',
		},
		{
			bankCode: 'BIDV',
			label: '',
			logoUrl: 'https://onepay.vn/paygate/assets/img/banklogo/19_logo_full.svg',
		},
		{
			bankCode: 'NCB',
			label: '',
			logoUrl: 'https://onepay.vn/paygate/assets/img/banklogo/23_logo_full.svg',
		},
		{
			bankCode: 'AGRIBANK',
			label: '',
			logoUrl: 'https://onepay.vn/paygate/assets/img/banklogo/24_logo_full.svg',
		},
		{
			bankCode: 'SCB',
			label: '',
			logoUrl: 'https://onepay.vn/paygate/assets/img/banklogo/25_logo_full.svg',
		},
		{
			bankCode: 'ACB',
			label: '',
			logoUrl: 'https://onepay.vn/paygate/assets/img/banklogo/33_logo_full.svg',
		},
		{
			bankCode: 'OCB',
			label: '',
			logoUrl: 'https://onepay.vn/paygate/assets/img/banklogo/35_logo_full.svg',
		},
		{
			bankCode: 'IVB',
			label: '',
			logoUrl: 'https://onepay.vn/paygate/assets/img/banklogo/43_logo_full.svg',
		},
		{
			bankCode: 'HDBANK',
			label: '',
			logoUrl: 'https://onepay.vn/paygate/assets/img/banklogo/51_logo_full.svg',
		},
		{
			bankCode: 'OJB',
			label: '',
			logoUrl: 'https://onepay.vn/paygate/assets/img/banklogo/55_logo_full.svg',
		},
	];

	for (let i = 1; i < number.length; i++) {
		const link = 'https://onepay.vn/paygate/assets/img/banklogo/' + number[i] + '_logo_full.svg';
		banks.push(link);
	}

	const handleSelectBank = (bankCode: string) => {
		console.log(`bankCode`, bankCode);
		if (bankCode === bankSelected) {
			setBankSelected(undefined);
			return;
		}
		setBankSelected(bankCode);
	};

	const handleThanhToanClick = async () => {
		if (!price || !bankSelected) return;

		const payload: PaymentPayload = {
			amount: price as string,
			bank_code: bankSelected,
		};

		await paymentApi.createPayment(payload);
	};

	return (
		<Container className="pt-5">
			<Row className="payment-detail--content">
				<Col lg={8}>
					<Row className="w-100">
						<Card className="w-100">
							<Card.Header>
								<h5 className="mb-0">Chọn phương thức thanh toán</h5>
							</Card.Header>
							<Card.Body>
								<Row>
									{bankList.map((bank, idx) => (
										<Col
											onClick={() => handleSelectBank(bank.bankCode)}
											key={idx}
											lg={2}
											className={`img m-1 ${bankSelected === bank.bankCode && 'active'}`}
										>
											<Image src={bank.logoUrl as string} alt=""></Image>
										</Col>
									))}
								</Row>
							</Card.Body>
						</Card>
					</Row>
				</Col>
				<Col lg={4}>
					<Row className="w-100">
						<Card className="w-100">
							<Card.Header>
								<h5 className="mb-0">Thông tin đơn hàng</h5>
							</Card.Header>
							<Card.Body>
								<Row className="px-1">
									<p className="w-100 mb-1">Đơn vị chấp nhận thanh toán </p>
									<h5 className="mt-0">Cinebee</h5>
									<br />
									<Card className="payment--info-card payment-detail--payment w-100">
										<ListGroup className="flex flex-row">
											<ListGroupItem className="p-0 pt-2 w-50 border-0">
												<h6 className="mb-0">Số tiền thanh toán</h6>
											</ListGroupItem>
											<ListGroupItem className="p-0 pt-2 border-0 w-50 d-flex justify-content-end">
												<p className="mb-0">
													{price}
													<span></span>
												</p>
											</ListGroupItem>
										</ListGroup>
										<ListGroup className="justify-content-end">
											<input
												className="px-3"
												onClick={() => handleThanhToanClick()}
												type="submit"
												value="Thanh Toán"
												disabled={!!(!price || !setBankSelected)}
											/>
										</ListGroup>
									</Card>
								</Row>
							</Card.Body>
						</Card>
					</Row>
				</Col>
			</Row>
		</Container>
	);
};
export default ThanhToanChiTietPage;
