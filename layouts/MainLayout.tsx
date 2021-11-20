import React from 'react';
import Head from 'next/head';
import { Footer, TopNav } from 'components';
import { LayoutProps } from 'interfaces';

export const MainLayout = ({ children }: LayoutProps) => {
	return (
		<>
			<Head>
				<title>Cinebee - Rạp chiếu phim</title>
				<meta
					name="description"
					content="Cinebee - Rạp chiếu phim"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<TopNav />

			<main>{children}</main>

			<Footer />
		</>
	);
};
