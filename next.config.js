/* eslint-disable */
/** @type {import("next").NextConfig} */

export default {
	webpack: (config) => {
		config.module.rules.push({
			test: /\.svg$/,
			loader: 'svg-sprite-loader',
		});

		return config;
	},
};
