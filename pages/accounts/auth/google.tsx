import { useAuth } from 'hooks';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { Jumbotron } from 'react-bootstrap';

interface Props {}

const GoogleAuth = (props: Props) => {
	const router = useRouter();
	const { loginWithSocial, profile } = useAuth();
	const payload = router.asPath;

	if (profile) {
		router.push('/');
	}

	useEffect(() => {
		if (!profile) {
			loginWithSocial(payload);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<Jumbotron className="text-center bg-transparent">
			<h1>Đang đăng nhập...</h1>
			<p>Vui lòng đợi trong giây lát, chúng tôi đang xử lý thông tin của bạn.</p>
		</Jumbotron>
	);
};

export default GoogleAuth;
