import { Auth } from 'components';
import { useAuth } from 'hooks';
import React from 'react';

interface Props {}

const ProfilePage = (props: Props) => {
	const { profile } = useAuth();

	return <Auth>{JSON.stringify(profile)}</Auth>;
};

export default ProfilePage;
