import type { Meta, StoryObj } from '@storybook/react';

import { Footer } from './Footer';

import '@/config/globals.scss';

const meta: Meta<typeof Footer> = {
	title: 'organisms/Footer',
	component: Footer,
	tags: ['autodocs'],
	argTypes: {
		description: {
			description: 'готов к использованию',
		},
	},
};
export default meta;

type Story = StoryObj<typeof Footer>;

export const CommonFooter: Story = {};
