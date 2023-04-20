import type { Preview } from '@storybook/react';
import '@/config/globals.scss';
import { themes } from '@storybook/theming';
import { StorybookWrapper } from './StorybookWrapper';

const preview: Preview = {
	decorators: [
		(Story) => {
			return (
				<StorybookWrapper>
					<Story />
				</StorybookWrapper>
			);
		},
	],
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
