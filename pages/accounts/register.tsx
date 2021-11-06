import { yupResolver } from '@hookform/resolvers/yup';
import { authApi } from 'api-client';
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
import { ToastError } from 'utils';
import * as yup from 'yup';

type Inputs = {
	username: string;
	password: string;
	passwordRepeat: string;
	fullname: string;
	email: string;
};

const schema = yup
	.object({
		username: yup.string().required('Tên tài khoản không được để trống'),
		password: yup.string().required('Mật khẩu không được để trống'),
		passwordRepeat: yup.string().oneOf([yup.ref('password'), null], 'Mật khẩu không trùng khớp'),
		fullname: yup
			.string()
			.min(5, 'Họ tên không ít hơn 5 ký tự')
			.required('Họ và tên không được để trống'),
		email: yup.string().email('Email không hợp lệ').required('Email không được để trống'),
	})
	.required();

const LoginPage: NextPageWithLayout = () => {
	const router = useRouter();
	const { profile } = useAuth({
		revalidateOnMount: false,
	});

	const {
		register,
		handleSubmit,
		formState: { errors, touchedFields, isSubmitting },
	} = useForm<Inputs>({
		resolver: yupResolver(schema),
		mode: 'onBlur',
	});

	React.useEffect(() => {
		if (profile) {
			router.push('/');
		}
	}, [profile, router]);

	const handleGoBackClick = () => router.back();

	const onSubmit: SubmitHandler<Inputs> = async (data) => {
		try {
			const { username, password, fullname, email } = data;
			await authApi.register({
				username: username,
				password: password,
				email: email,
				fullname: fullname,
			});
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
									{...register('username')}
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
									placeholder="password..."
									{...register('password')}
									isInvalid={Boolean(touchedFields.password && errors.password)}
								/>
								<Form.Control.Feedback type="invalid">
									{errors.password?.message}
								</Form.Control.Feedback>
							</Form.Group>

							{/* Password Confirmation */}
							<Form.Group controlId="passwordRepeat">
								<Form.Label>Nhập lại mật khẩu</Form.Label>
								<Form.Control
									type="password"
									placeholder="password..."
									{...register('passwordRepeat')}
									isInvalid={Boolean(touchedFields.passwordRepeat && errors.passwordRepeat)}
								/>
								<Form.Control.Feedback type="invalid">
									{errors.passwordRepeat?.message}
								</Form.Control.Feedback>
							</Form.Group>

							{/* Email */}
							<Form.Group controlId="email">
								<Form.Label>Email</Form.Label>
								<Form.Control
									type="text"
									placeholder="Abc@gmail.com..."
									{...register('email')}
									isInvalid={Boolean(touchedFields.email && errors.email)}
								/>
								<Form.Control.Feedback type="invalid">
									{errors.email?.message}
								</Form.Control.Feedback>
							</Form.Group>

							{/* Fullname */}
							<Form.Group controlId="fullname">
								<Form.Label>Họ và tên</Form.Label>
								<Form.Control
									type="text"
									placeholder="Nguyen Van A..."
									{...register('fullname')}
									isInvalid={Boolean(touchedFields.fullname && errors.fullname)}
								/>
								<Form.Control.Feedback type="invalid">
									{errors.fullname?.message}
								</Form.Control.Feedback>
							</Form.Group>

							{/* Button Register */}
							<Form.Group>
								<Button variant="primary" type="submit" block disabled={isSubmitting}>
									{isSubmitting ? 'Đăng ký...' : 'Đăng ký'}
								</Button>
							</Form.Group>

							{/* Button Login */}
							<Link href="/accounts/login" passHref>
								<Button variant="outline-light" block>
									Đăng nhập
								</Button>
							</Link>

							{/* Button forgot */}
							<Link href="/accounts/forgot" passHref>
								<Button variant="" block>
									Quên mật khẩu ?
								</Button>
							</Link>

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
