import type { Preview } from '@storybook/react';
import { themes } from '@storybook/theming';
import '@/config/globals.scss';

const preview: Preview = {
	parameters: {
		docs: {
			theme: themes.dark,
		},
		backgrounds: {
			default: 'ivi',
			values: [
				{
					name: 'ivi',
					value: '#100e19',
				},
			],
		},
		actions: { argTypesRegex: '^on[A-Z].*' },
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/,
			},
		},
	},
};

export default preview;
