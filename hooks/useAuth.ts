import { authApi } from 'api-client';
import { ONE_MINUTE } from 'constant';
import useSWR from 'swr';
import { PublicConfiguration } from 'swr/dist/types';

export function useAuth(options?: Partial<PublicConfiguration>) {
	// profile
	const {
		data: profile,
		error,
		mutate,
		isValidating,
	} = useSWR('/accounts/profile', () => authApi.getProfile(), {
		dedupingInterval: 60 * ONE_MINUTE, // 1hr
		revalidateOnFocus: false,
		...options,
	});

	const firstLoading = profile === undefined && error === undefined;

	// login
	async function login() {
		await authApi.login({
			username: 'pstokes',
			password: 'Abc@12345',
		});

		await mutate();
	}

	async function logout() {
		await authApi.logout();

		mutate(null, false);
	}

	return {
		profile,
		error,
		isValidating,
		firstLoading,
		mutate,
		login,
		logout,
	};
}
