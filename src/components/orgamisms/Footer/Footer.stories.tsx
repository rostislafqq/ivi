import { Footer } from './Footer';

import type { Meta, StoryObj } from '@storybook/react';

import '@/config/globals.scss';

const meta: Meta<typeof Footer> = {
	title: 'organisms/Footer',
	component: Footer,
	tags: ['autodocs'],

	argTypes: {
		children: {
			description: 'может принимать не только текст',
		},
	},
};
export default meta;

type Story = StoryObj<typeof Footer>;

export const CommonFooter: Story = {};
