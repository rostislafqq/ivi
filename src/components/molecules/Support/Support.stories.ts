import { Support } from './Support';

import type { Meta, StoryObj } from '@storybook/react';

import '@/config/globals.scss';

const meta: Meta<typeof Support> = {
	title: 'molecules/Support',
	component: Support,
	tags: ['autodocs'],
	argTypes: {
		description: {
			description: 'готов к использованию',
		},
	},
};
export default meta;

type Story = StoryObj<typeof Support>;

export const DefaultSupport: Story = {};
