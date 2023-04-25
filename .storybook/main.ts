import type { StorybookConfig } from '@storybook/nextjs';

import SpriteLoaderPlugin from 'svg-sprite-loader/plugin';

const config: StorybookConfig = {
	stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
	addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-interactions'],
	framework: {
		name: '@storybook/nextjs',
		options: {},
	},
	docs: {
		autodocs: 'tag',
	},
	staticDirs: [{ from: '../src/assets/fonts/', to: '' }],
	webpackFinal: async (config, { configType }) => {
		config.module.rules = config.module.rules.map((rule) => {
			const reg = new RegExp('svg');
			if (reg.test(rule.test)) {
				const test = rule.test.toString().replace('svg|', '').replace(/\//g, '');
				return { ...rule, test: new RegExp(test) };
			} else {
				return rule;
			}
		});

		config.module.rules.push({
			test: /\.svg$/,
			loader: 'svg-sprite-loader',
		});
		config.plugins.push(new SpriteLoaderPlugin());
		return config;
	},
};
export default config;
