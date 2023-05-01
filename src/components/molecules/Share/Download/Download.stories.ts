import { Download } from './Download';

import type { Meta, StoryObj } from '@storybook/react';

import '@/config/globals.scss';

const meta: Meta<typeof Download> = {
	title: 'molecules/Share/Download',
	component: Download,
	tags: ['autodocs'],
	argTypes: {
		description: {
			description: 'готов к использованию',
		},
	},
};
export default meta;

type Story = StoryObj<typeof Download>;

export const DefaultDownload: Story = {};
