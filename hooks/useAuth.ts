import { authApi } from 'api-client';
import { ONE_MINUTE } from 'constant';
import { SocialLoginPayload } from 'interfaces';
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
	async function login(username: string, password: string) {
		await authApi.login({
			username: username,
			password: password,
		});

		await mutate();
	}

	async function logout() {
		await authApi.logout();

		mutate(null, false);
	}

	async function loginWithSocial(payload: string) {
		await authApi.loginWithSocial(payload);
		await mutate();
	}

	return {
		profile,
		error,
		isValidating,
		firstLoading,
		mutate,
		login,
		logout,
		loginWithSocial,
	};
}
