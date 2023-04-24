/** @type {import("next").NextConfig} */


module.exports = {
	webpack: (config) => {
		config.module.rules.push({
			test: /\.svg$/,
			loader: "svg-sprite-loader"
		});

		return config;
	}
};
