import { Social } from './Social';

import type { Meta, StoryObj } from '@storybook/react';

import '@/config/globals.scss';

const meta: Meta<typeof Social> = {
	title: 'molecules/Share/Social',
	component: Social,
	tags: ['autodocs'],
	argTypes: {
		description: {
			description: 'готов к использованию',
		},
	},
};
export default meta;

type Story = StoryObj<typeof Social>;

export const DefaultSocial: Story = {};
