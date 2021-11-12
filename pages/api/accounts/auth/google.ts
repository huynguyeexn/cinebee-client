import type { NextApiRequest, NextApiResponse } from 'next';
import httpProxy, { ProxyResCallback } from 'http-proxy';
import Cookies from 'cookies';

export const config = {
	api: {
		bodyParser: false,
	},
};

const proxy = httpProxy.createProxyServer();

export default function handler(req: NextApiRequest, res: NextApiResponse<any>) {
	if (req.method !== 'GET') {
		return res.status(404).json({ message: 'Method not supported!' });
	}

	return new Promise((resolve) => {
		req.headers.cookie = '';

		const handleLoginResponse: ProxyResCallback = (proxyRes, req, res) => {
			let body = '';
			const statusCode = proxyRes?.statusCode || 200;
			proxyRes.on('data', (chunk) => {
				body += chunk;
			});

			proxyRes.on('end', () => {
				try {
					const { access_token, expired, message, data } = JSON.parse(body);

					const cookies = new Cookies(req, res, { secure: process.env.NODE_ENV !== 'development' });
					cookies.set('access_token', access_token, {
						httpOnly: true,
						sameSite: 'lax',
						maxAge: expired * 1000,
					});

					(res as NextApiResponse).status(statusCode).json({
						message: message,
						data: data,
					});
				} catch (error) {
					(res as NextApiResponse).status(500).json({ message: 'Something went wrong!' });
				}
				resolve(true);
			});
		};

		proxy.once('proxyRes', handleLoginResponse);
		proxy.web(req, res, {
			target: process.env.API_URL,
			changeOrigin: true,
			selfHandleResponse: true,
		});
	});
}
