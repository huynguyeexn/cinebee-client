import { useAuth } from 'hooks';
import { LayoutProps } from 'interfaces';
import { useRouter } from 'next/router';
import React from 'react';

export const Auth = ({ children }: LayoutProps) => {
	const router = useRouter();
	const { profile, firstLoading } = useAuth();

	React.useEffect(() => {
		if (!firstLoading && !profile?.username) {
			router.push('/accounts/login');
		}
	}, [router, firstLoading, profile]);

	if (!profile?.username) return <p>Loading...</p>;

	return <div>{children}</div>;
};
