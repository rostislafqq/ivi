/** @type {import("next").NextConfig} */
const SpriteLoaderPlugin = require("svg-sprite-loader/plugin");

module.exports = {
	webpack: (config) => {
		config.module.rules.push({
			test: /\.svg$/,
			loader: "svg-sprite-loader"
		});

		return config;
	}
};
