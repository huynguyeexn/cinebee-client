import React from 'react';
import Head from 'next/head';
import { Footer, TopNav } from 'components';

interface Props {
	children: any;
}

export const MainLayout = ({ children }: Props) => {
	return (
		<>
			<Head>
				<title>Cinebee - Cinema management system</title>
				<meta
					name="description"
					content="Cinebee - Cinema management system - product of Raccoon Team"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<TopNav />

			<main>{children}</main>

			<Footer />
		</>
	);
};
