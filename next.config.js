/* eslint-disable */
/** @type {import("next").NextConfig} */

const nextConfig = {
	images: {
		domains: ['kinopoiskapiunofficial.tech', 'localhost', 'avatars.mds.yandex.net'],
	},
	webpack: (config) => {
		config.module.rules.push({
			test: /\.svg$/,
			loader: 'svg-sprite-loader',
		});

		return config;
	},
};

export default nextConfig;
