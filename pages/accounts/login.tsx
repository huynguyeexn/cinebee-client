import { useAuth } from 'hooks';
import { NextPageWithLayout } from 'interfaces';
import { EmptyLayout } from 'layouts/EmptyLayout';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { FormEvent } from 'react';
import { Button, Card, Col, Container, Form, Spinner } from 'react-bootstrap';

const LoginPage: NextPageWithLayout = () => {
	const router = useRouter();
	const { profile, login } = useAuth({
		revalidateOnMount: false,
	});
	const [isLoading, setLoading] = React.useState(false);
	const usernameRef = React.useRef(null);
	const passwordRef = React.useRef(null);

	React.useEffect(() => {
		if (profile) {
			router.push('/');
		}
	}, [profile, router]);

	const handleSubmit = async (event?: FormEvent<HTMLFormElement>) => {
		if (!event) return;
		event.preventDefault();
		event.stopPropagation();

		const username = (usernameRef?.current as HTMLInputElement | null)?.value || null;
		const password = (passwordRef?.current as HTMLInputElement | null)?.value || null;

		if (!username || !password) return;
		setLoading(true);

		try {
			await login(username, password);
		} catch (error) {
			console.dir(error.response.data.message);
			console.error(error);
		}

		setLoading(false);
	};

	return (
		<Container
			className="d-flex justify-content-center align-items-center"
			style={{ minHeight: '95vh' }}
		>
			<Col xs={12} sm={9} md={6} lg={5} xl={4}>
				<Card>
					<Card.Body>
						<Form onSubmit={handleSubmit}>
							<h3 className="text-center mb-4">Đăng nhập</h3>
							<Form.Group controlId="username">
								<Form.Label>Tên tài khoản</Form.Label>
								<Form.Control required type="text" placeholder="Username..." ref={usernameRef} />
							</Form.Group>

							<Form.Group controlId="password">
								<Form.Label>Mật khẩu</Form.Label>
								<Form.Control
									required
									type="password"
									placeholder="Password..."
									ref={passwordRef}
								/>
							</Form.Group>
							<Form.Group>
								<Button variant="primary" type="submit" block disabled={isLoading}>
									{isLoading ? 'Đăng nhập...' : 'Đăng nhập'}
								</Button>
							</Form.Group>
							<Link href="accounts/register" passHref>
								<Button variant="outline-light" block>
									Đăng ký
								</Button>
							</Link>
							<Link href="accounts/forgot" passHref>
								<Button variant="" block>
									Quên mật khẩu ?
								</Button>
							</Link>
						</Form>
					</Card.Body>
				</Card>
			</Col>
		</Container>
	);
};

LoginPage.Layout = EmptyLayout;

export default LoginPage;
