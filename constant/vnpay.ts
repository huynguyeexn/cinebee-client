export interface VNPAY_BANK_LIST_TYPE {
    id: number;
    code: string;
    name: string;
    logo_url: string;
}

export interface VNPAY_ERROR_CODE_TYPE {
	code: string;
	message: string;
}

export const VNPAY_BANK_LIST: VNPAY_BANK_LIST_TYPE[] = [
	{
		id: 1,
		code: 'ABBANK',
		name: 'Ngân hàng thương mại cổ phần An Bình (ABBANK)',
		logo_url: 'https://sandbox.vnpayment.vn/apis/assets/images/bank/abbank_logo.png',
	},
	{
		id: 2,
		code: 'ACB',
		name: 'Ngân hàng ACB',
		logo_url: 'https://sandbox.vnpayment.vn/apis/assets/images/bank/acb_logo.png',
	},
	{
		id: 3,
		code: 'AGRIBANK',
		name: 'Ngân hàng Nông nghiệp (Agribank)',
		logo_url: 'https://sandbox.vnpayment.vn/apis/assets/images/bank/agribank_logo.png',
	},
	{
		id: 4,
		code: 'BACABANK',
		name: 'Ngân Hàng TMCP Bắc Á',
		logo_url: 'https://sandbox.vnpayment.vn/apis/assets/images/bank/bacabank_logo.png',
	},
	{
		id: 5,
		code: 'BIDV',
		name: 'Ngân hàng đầu tư và phát triển Việt Nam (BIDV)',
		logo_url: 'https://sandbox.vnpayment.vn/apis/assets/images/bank/bidv_logo.png',
	},
	{
		id: 6,
		code: 'DONGABANK',
		name: 'Ngân hàng Đông Á (DongABank)',
		logo_url: 'https://sandbox.vnpayment.vn/apis/assets/images/bank/dongabank_logo.png',
	},
	{
		id: 7,
		code: 'EXIMBANK',
		name: 'Ngân hàng EximBank',
		logo_url: 'https://sandbox.vnpayment.vn/apis/assets/images/bank/eximbank_logo.png',
	},
	{
		id: 8,
		code: 'HDBANK',
		name: 'Ngan hàng HDBank',
		logo_url: 'https://sandbox.vnpayment.vn/apis/assets/images/bank/hdbank_logo.png',
	},
	{
		id: 9,
		code: 'IVB',
		name: 'Ngân hàng TNHH Indovina (IVB)',
		logo_url: 'https://sandbox.vnpayment.vn/apis/assets/images/bank/ivb_logo.png',
	},
	{
		id: 10,
		code: 'MBBANK',
		name: 'Ngân hàng thương mại cổ phần Quân đội',
		logo_url: 'https://sandbox.vnpayment.vn/apis/assets/images/bank/mbbank_logo.png',
	},
	{
		id: 11,
		code: 'MSBANK',
		name: 'Ngân hàng Hàng Hải (MSBANK)',
		logo_url: 'https://sandbox.vnpayment.vn/apis/assets/images/bank/msbank_logo.png',
	},
	{
		id: 12,
		code: 'NAMABANK',
		name: 'Ngân hàng Nam Á (NamABank)',
		logo_url: 'https://sandbox.vnpayment.vn/apis/assets/images/bank/namabank_logo.png',
	},
	{
		id: 13,
		code: 'NCB',
		name: 'Ngân hàng Quốc dân (NCB)',
		logo_url: 'https://sandbox.vnpayment.vn/apis/assets/images/bank/ncb_logo.png',
	},
	{
		id: 14,
		code: 'OCB',
		name: 'Ngân hàng Phương Đông (OCB)',
		logo_url: 'https://sandbox.vnpayment.vn/apis/assets/images/bank/ocb_logo.png',
	},
	{
		id: 15,
		code: 'OJB',
		name: 'Ngân hàng Đại Dương (OceanBank)',
		logo_url: 'https://sandbox.vnpayment.vn/apis/assets/images/bank/ojb_logo.png',
	},
	{
		id: 16,
		code: 'PVCOMBANK',
		name: 'Ngân hàng TMCP Đại Chúng Việt Nam',
		logo_url: 'https://sandbox.vnpayment.vn/apis/assets/images/bank/PVComBank_logo.png',
	},
	{
		id: 17,
		code: 'SACOMBANK',
		name: 'Ngân hàng TMCP Sài Gòn Thương Tín (SacomBank)',
		logo_url: 'https://sandbox.vnpayment.vn/apis/assets/images/bank/sacombank_logo.png',
	},
	{
		id: 18,
		code: 'SAIGONBANK',
		name: 'Ngân hàng thương mại cổ phần Sài Gòn Công Thương',
		logo_url: 'https://sandbox.vnpayment.vn/apis/assets/images/bank/saigonbank.png',
	},
	{
		id: 19,
		code: 'SCB',
		name: 'Ngân hàng TMCP Sài Gòn (SCB)',
		logo_url: 'https://sandbox.vnpayment.vn/apis/assets/images/bank/scb_logo.png',
	},
	{
		id: 20,
		code: 'SHB',
		name: 'Ngân hàng Thương mại cổ phần Sài Gòn - Hà Nội(SHB)',
		logo_url: 'https://sandbox.vnpayment.vn/apis/assets/images/bank/shb_logo.png',
	},
	{
		id: 21,
		code: 'TECHCOMBANK',
		name: 'Ngân hàng Kỹ thương Việt Nam (TechcomBank)',
		logo_url: 'https://sandbox.vnpayment.vn/apis/assets/images/bank/techcombank_logo.png',
	},
	{
		id: 22,
		code: 'TPBANK',
		name: 'Ngân hàng Tiên Phong (TPBank)',
		logo_url: 'https://sandbox.vnpayment.vn/apis/assets/images/bank/tpbank_logo.png',
	},
	{
		id: 23,
		code: 'VPBANK',
		name: 'Ngân hàng Việt Nam Thịnh vượng (VPBank)',
		logo_url: 'https://sandbox.vnpayment.vn/apis/assets/images/bank/vpbank_logo.png',
	},
	{
		id: 24,
		code: 'SEABANK',
		name: 'Ngân Hàng TMCP Đông Nam Á',
		logo_url: 'https://sandbox.vnpayment.vn/apis/assets/images/bank/seabank_logo.png',
	},
	{
		id: 25,
		code: 'VIB',
		name: 'Ngân hàng Thương mại cổ phần Quốc tế Việt Nam (VIB)',
		logo_url: 'https://sandbox.vnpayment.vn/apis/assets/images/bank/vib_logo.png',
	},
	{
		id: 26,
		code: 'VIETABANK',
		name: 'Ngân hàng TMCP Việt Á',
		logo_url: 'https://sandbox.vnpayment.vn/apis/assets/images/bank/vietabank_logo.png',
	},
	{
		id: 27,
		code: 'VIETBANK',
		name: 'Ngân hàng thương mại cổ phần Việt Nam Thương Tín',
		logo_url: 'https://sandbox.vnpayment.vn/apis/assets/images/bank/vietbank_logo.png',
	},
	{
		id: 28,
		code: 'VIETCAPITALBANK',
		name: 'Ngân Hàng Bản Việt',
		logo_url: 'https://sandbox.vnpayment.vn/apis/assets/images/bank/vccb_logo.png',
	},
	{
		id: 29,
		code: 'VIETCOMBANK',
		name: 'Ngân hàng Ngoại thương (Vietcombank)',
		logo_url: 'https://sandbox.vnpayment.vn/apis/assets/images/bank/vietcombank_logo.png',
	},
	{
		id: 30,
		code: 'VIETINBANK',
		name: 'Ngân hàng Công thương (Vietinbank)',
		logo_url: 'https://sandbox.vnpayment.vn/apis/assets/images/bank/vietinbank_logo.png',
	},
	{
		id: 31,
		code: 'BIDC',
		name: 'Ngân Hàng BIDC',
		logo_url: 'https://sandbox.vnpayment.vn/apis/assets/images/bank/bidc_logo.png',
	},
	{
		id: 32,
		code: 'LAOVIETBANK',
		name: 'NGÂN HÀNG LIÊN DOANH LÀO - VIỆT',
		logo_url: 'https://sandbox.vnpayment.vn/apis/assets/images/bank/laovietbank_logo.png',
	},
	{
		id: 33,
		code: 'WOORIBANK',
		name: 'Ngân hàng TNHH MTV Woori Việt Nam',
		logo_url: 'https://sandbox.vnpayment.vn/apis/assets/images/bank/woori_logo.png',
	},
	{
		id: 34,
		code: 'AMEX',
		name: 'American Express',
		logo_url: 'https://sandbox.vnpayment.vn/apis/assets/images/bank/amex_logo.png',
	},
	{
		id: 35,
		code: 'VISA',
		name: 'Thẻ quốc tế Visa',
		logo_url: 'https://sandbox.vnpayment.vn/apis/assets/images/bank/visa_logo.png',
	},
	{
		id: 36,
		code: 'MASTERCARD',
		name: 'Thẻ quốc tế MasterCard',
		logo_url: 'https://sandbox.vnpayment.vn/apis/assets/images/bank/mastercard_logo.png',
	},
	{
		id: 37,
		code: 'JCB',
		name: 'Thẻ quốc tế JCB',
		logo_url: 'https://sandbox.vnpayment.vn/apis/assets/images/bank/jcb_logo.png',
	},
	{
		id: 38,
		code: 'UPI',
		name: 'UnionPay International',
		logo_url: 'https://sandbox.vnpayment.vn/apis/assets/images/bank/upi_logo.png',
	},
	{
		id: 39,
		code: 'VNMART',
		name: 'Ví điện tử VnMart',
		logo_url: 'https://sandbox.vnpayment.vn/apis/assets/images/bank/vnmart_logo.png',
	},
	{
		id: 40,
		code: 'VNPAYQR',
		name: 'Cổng thanh toán VNPAYQR',
		logo_url: 'https://sandbox.vnpayment.vn/apis/assets/images/bank/CTT-VNPAY-QR.png',
	},
	{
		id: 41,
		code: '1PAY',
		name: 'Ví điện tử 1Pay',
		logo_url: 'https://sandbox.vnpayment.vn/apis/assets/images/bank/1pay_logo.png',
	},
	{
		id: 42,
		code: 'FOXPAY',
		name: 'Ví điện tử FOXPAY',
		logo_url: 'https://sandbox.vnpayment.vn/apis/assets/images/bank/foxpay_logo.png',
	},
	{
		id: 43,
		code: 'VIMASS',
		name: 'Ví điện tử Vimass',
		logo_url: 'https://sandbox.vnpayment.vn/apis/assets/images/bank/vimass_logo.png',
	},
	{
		id: 44,
		code: 'VINID',
		name: 'Ví điện tử VINID',
		logo_url: 'https://sandbox.vnpayment.vn/apis/assets/images/bank/vinid_logo.png',
	},
	{
		id: 45,
		code: 'VIVIET',
		name: 'Ví điện tử Ví Việt',
		logo_url: 'https://sandbox.vnpayment.vn/apis/assets/images/bank/viviet_logo.png',
	},
	{
		id: 46,
		code: 'VNPTPAY',
		name: 'Ví điện tử VNPTPAY',
		logo_url: 'https://sandbox.vnpayment.vn/apis/assets/images/bank/vnptpay_logo.png',
	},
	{
		id: 47,
		code: 'YOLO',
		name: 'Ví điện tử YOLO',
		logo_url: 'https://sandbox.vnpayment.vn/apis/assets/images/bank/yolo_logo.png',
	},
	{
		id: 48,
		code: 'VIETCAPITALBANK',
		name: 'Ngân Hàng Bản Việt',
		logo_url: 'https://sandbox.vnpayment.vn/apis/assets/images/bank/vccb_logo.png',
	},
];


export const VNPAY_ERROR_CODE: VNPAY_ERROR_CODE_TYPE[] = [
	{
		code: '00',
		message: 'Giao dịch thành công',
	},
	{
		code: '07',
		message: 'Trừ tiền thành công. Giao dịch bị nghi ngờ (liên quan tới lừa đảo, giao dịch bất thường).',
	},
	{
		code: '09',
		message: 'Giao dịch không thành công do: Thẻ/Tài khoản của khách hàng chưa đăng ký dịch vụ InternetBanking tại ngân hàng.',
	},
	{
		code: '10',
		message: 'Giao dịch không thành công do: Khách hàng xác thực thông tin thẻ/tài khoản không đúng quá 3 lần',
	},
	{
		code: '11',
		message: 'Giao dịch không thành công do: Đã hết hạn chờ thanh toán. Xin quý khách vui lòng thực hiện lại giao dịch.',
	},
	{
		code: '12',
		message: 'Giao dịch không thành công do: Thẻ/Tài khoản của khách hàng bị khóa.',
	},
	{
		code: '13',
		message: 'Giao dịch không thành công do Quý khách nhập sai mật khẩu xác thực giao dịch (OTP). Xin quý khách vui lòng thực hiện lại giao dịch.',
	},
	{
		code: '24',
		message: 'Giao dịch không thành công do: Khách hàng hủy giao dịch',
	},
	{
		code: '51',
		message: 'Giao dịch không thành công do: Tài khoản của quý khách không đủ số dư để thực hiện giao dịch.',
	},
	{
		code: '65',
		message: 'Giao dịch không thành công do: Tài khoản của Quý khách đã vượt quá hạn mức giao dịch trong ngày.',
	},
	{
		code: '75',
		message: 'Ngân hàng thanh toán đang bảo trì.',
	},
	{
		code: '79',
		message: 'Giao dịch không thành công do: KH nhập sai mật khẩu thanh toán quá số lần quy định. Xin quý khách vui lòng thực hiện lại giao dịch',
	},
	{
		code: '99',
		message: 'Các lỗi khác (lỗi còn lại, không có trong danh sách mã lỗi đã liệt kê)',
	},
]