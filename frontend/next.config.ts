import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	env: {
		SERVER_URL: process.env.SERVER_URL,
		GOOGLE_RECAPTCHA_SITE_KEY: process.env.GOOGLE_RECAPTCHA_SITE_KEY,
		JWT_SECRET_KEY: process.env.JWT_ACCESS_TOKEN,
		ACCESS_TOKEN: process.env.ACCESS_TOKEN
	},
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'lh3.googleusercontent.com',
			},
			{
				protocol: 'https',
				hostname: 'avatart.yandex.net',
			},
			{
				protocol: 'https',
				hostname: 'avatars.githubusercontent.com',
			},
		],
	},
};

export default nextConfig;
