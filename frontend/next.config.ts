import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	env: {
		strapiBaseURL: 'http://localhost:1337/api/',
	},
};

export default nextConfig;
