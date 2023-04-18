/** @type {import('next').NextConfig} */
const SpriteLoaderPlugin = require("svg-sprite-loader/plugin");

const nextConfig = {
	experimental: {
		appDir: true,
	},
};

module.exports = module.exports = {
	webpack: (config, options) => {
		config.module.rules.push({
			test: /\.svg$/,
			loader: "svg-sprite-loader",
		});

		return config;
	},
};
