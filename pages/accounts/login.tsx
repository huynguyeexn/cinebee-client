import { yupResolver } from '@hookform/resolvers/yup';
import { AxiosError } from 'axios';
import { useAuth } from 'hooks';
import { NextPageWithLayout } from 'interfaces';
import { EmptyLayout } from 'layouts/EmptyLayout';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { Button, Card, Col, Container, Form } from 'react-bootstrap';
import { SubmitHandler, useForm } from 'react-hook-form';
import { IoArrowBackCircleOutline } from 'react-icons/io5';
import { FaFacebookF, FaGoogle } from 'react-icons/fa';
import { ToastError } from 'utils';
import * as yup from 'yup';
import { authApi } from 'api-client';

type Inputs = {
	username: string;
	password: string;
};

const schema = yup
	.object({
		username: yup.string().required('Tên tài khoản không được để trống'),
		password: yup.string().required('Mật khẩu không được để trống'),
	})
	.required();

const LoginPage: NextPageWithLayout = () => {
	const router = useRouter();
	const { profile, login } = useAuth({
		revalidateOnMount: false,
	});

	const [googleUrl, setGoogleUrl] = React.useState(null);

	const {
		register,
		handleSubmit,
		formState: { errors, touchedFields, isSubmitting },
	} = useForm<Inputs>({
		resolver: yupResolver(schema),
	});

	React.useEffect(() => {
		(() => {
			authApi.getGoogleLoginUrl().then((res) => {
				setGoogleUrl(res.data);
			});
		})();

		if (profile) {
			router.push('/');
		}
	}, [profile, router]);

	const handleGoBackClick = () => router.push('/');

	const onSubmit: SubmitHandler<Inputs> = async (data) => {
		try {
			const { username, password } = data;
			await login(username, password);
		} catch (error) {
			const msg = (error as AxiosError).response?.data?.message;
			const errors = (error as AxiosError).response?.data?.errors;
			if (errors) {
				Object.keys(errors).map((key: string) => errors[key].map((err: string) => ToastError(err)));
			} else if (msg) {
				msg && ToastError(msg);
			}
			console.error(error);
		}
	};

	return (
		<Container
			className="d-flex justify-content-center align-items-center"
			style={{ minHeight: '95vh' }}
		>
			<Col xs={12} sm={9} md={6} lg={5} xl={4}>
				<Card>
					<Card.Body>
						<Form onSubmit={handleSubmit(onSubmit)}>
							<h3 className="text-center mb-4">Đăng nhập</h3>

							{/* Username */}
							<Form.Group controlId="username">
								<Form.Label>Tên tài khoản</Form.Label>
								<Form.Control
									type="text"
									placeholder="Username..."
									{...register('username', { required: true })}
									isInvalid={Boolean(touchedFields.username && errors.username)}
								/>
								<Form.Control.Feedback type="invalid">
									{errors.username?.message}
								</Form.Control.Feedback>
							</Form.Group>

							{/* Password */}
							<Form.Group controlId="password">
								<Form.Label>Mật khẩu</Form.Label>
								<Form.Control
									type="password"
									placeholder="Password..."
									{...register('password', { required: true })}
									isInvalid={Boolean(touchedFields.password && errors.password)}
								/>
								<Form.Control.Feedback type="invalid">
									{errors.password?.message}
								</Form.Control.Feedback>
							</Form.Group>

							{/* Button Login */}
							<Form.Group>
								<Button variant="primary" type="submit" block disabled={isSubmitting}>
									{isSubmitting ? 'Đăng nhập...' : 'Đăng nhập'}
								</Button>
							</Form.Group>

							{/* Button Register */}
							<Link href="/accounts/register" passHref>
								<Button variant="outline-light" block>
									Đăng ký
								</Button>
							</Link>

							{/* Button forgot */}
							<Link href="/accounts/forgot" passHref>
								<Button variant="" block>
									Quên mật khẩu ?
								</Button>
							</Link>

							{/* Social login buttons */}
							<div className="d-flex justify-content-center">
								{googleUrl && (
									<Button
										variant="outline-light"
										className="mr-2"
										onClick={() => (window.location.href = googleUrl)}
									>
										<FaGoogle />
									</Button>
								)}
								<Button variant="outline-light" className="mr-2">
									<FaFacebookF />
								</Button>
							</div>

							{/* Button Go home */}
							<Button variant="link" block onClick={handleGoBackClick}>
								<IoArrowBackCircleOutline className="mr-2" style={{ fontSize: '2rem' }} />
							</Button>
						</Form>
					</Card.Body>
				</Card>
			</Col>
		</Container>
	);
};

LoginPage.Layout = EmptyLayout;

export default LoginPage;
