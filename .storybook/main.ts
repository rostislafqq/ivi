import type { StorybookConfig } from '@storybook/nextjs';

const CopyWebpackPlugin = require('copy-webpack-plugin');
import * as path from 'path';

const config: StorybookConfig = {
	stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
	addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-interactions'],
	framework: {
		name: '@storybook/nextjs',
		options: {
			nextConfigPath: path.resolve(__dirname, '../next.config.js'),
		},
	},
	docs: {
		autodocs: 'tag',
	},
	staticDirs: [{ from: '../src/assets/fonts/', to: '' }],
};

export default config;
