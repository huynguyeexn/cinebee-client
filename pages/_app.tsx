import axiosClient from 'api-client/axiosClient';
import { AppPropsWithLayout } from 'interfaces';
import { MainLayout } from 'layouts';
import type { AppProps } from 'next/app';
import Router from 'next/router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import { SWRConfig } from 'swr';
import '../styles/app.scss';

NProgress.configure({ showSpinner: false, easing: 'ease', speed: 500 });
Router.events.on('routeChangeStart', (url) => {
	NProgress.start();
});
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

const configSWR = {
	fetcher: (url: string) => axiosClient.get(url),
	shouldRetryOnError: false,
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
	const Layout = Component.Layout ?? MainLayout;

	return (
		<SWRConfig value={configSWR}>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</SWRConfig>
	);
}
export default MyApp;
