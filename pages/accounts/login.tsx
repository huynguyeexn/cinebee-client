import { authApi } from 'api-client';
import { useAuth } from 'hooks';
import { NextPageWithLayout } from 'interfaces';
import { EmptyLayout } from 'layouts/EmptyLayout';
import { useRouter } from 'next/router';
import React from 'react';

const LoginPage: NextPageWithLayout = () => {
	const router = useRouter();
	const { profile, login, logout } = useAuth({
		revalidateOnMount: false,
	});

	React.useEffect(() => {
		if (profile) {
			router.push('/');
		}
	}, [profile, router]);

	const handleLogin = async () => {
		try {
			await login();
		} catch (error) {
			console.log(`Failed to login!`, error);
		}
	};

	const handleLogout = async () => {
		try {
			await logout();
		} catch (error) {
			console.log(`Failed to logout!`, error);
		}
	};

	return (
		<div>
			<h1>Login Page</h1>
			<p>{JSON.stringify(profile || null)}</p>
			<button onClick={handleLogin}>Login</button>
			<button onClick={handleLogout}>Logout</button>
		</div>
	);
};

LoginPage.Layout = EmptyLayout;

export default LoginPage;
