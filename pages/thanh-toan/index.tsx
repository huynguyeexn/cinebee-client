import { paymentApi, PaymentPayload } from 'api-client/payment';
import { VNPAY_BANK_LIST } from 'constant/vnpay';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { Card, Col, Container, Form, Image, ListGroup, ListGroupItem, Row } from 'react-bootstrap';

interface Props {}

const ThanhToanChiTietPage = (props: Props) => {
	const router = useRouter();
	const { order_code, price } =
		typeof window !== 'undefined' && JSON.parse(window.sessionStorage.getItem('orderTemp') || '{}');
	const [bankSelected, setBankSelected] = useState<string | undefined>();
	const [searchBank, setSearchBank] = useState('');
	const [bankList, setBankList] = useState(VNPAY_BANK_LIST);

	const handleSelectBank = (bankCode: string) => {
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
			order_code: order_code,
		};

		const response = await paymentApi.createPayment(payload);

		window.location.href = response.data;
	};

	const handleSearchBankChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchBank(e.target.value);

		if (e.target.value !== '') {
			setBankList(
				VNPAY_BANK_LIST.filter((bank) => {
					const flagName = bank.name.toLowerCase().includes(e.target.value.toLowerCase());
					const flagCode = bank.code.toLowerCase().includes(e.target.value.toLowerCase());
					return flagName || flagCode;
				})
			);
		} else {
			setBankList(VNPAY_BANK_LIST);
		}
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
									<Col>
										<Form>
											<Form.Group controlId="search_bank">
												<Form.Label>Tìm ngân hàng của bạn</Form.Label>
												<Form.Control
													type="searchBank"
													placeholder="Vietcombank..."
													value={searchBank}
													onChange={handleSearchBankChange}
												/>
											</Form.Group>
										</Form>
									</Col>
								</Row>
								<Row>
									{bankList.map((bank, idx) => (
										<Col
											onClick={() => handleSelectBank(bank.code)}
											key={idx}
											xs={6}
											md={4}
											lg={2}
											className={`img ${bankSelected === bank.code && 'active'}`}
										>
											<Image src={bank.logo_url as string} alt=""></Image>
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
												disabled={!bankSelected}
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
