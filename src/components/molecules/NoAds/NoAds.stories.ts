import { NoAds } from './NoAds';

import type { Meta, StoryObj } from '@storybook/react';

import '@/config/globals.scss';

const meta: Meta<typeof NoAds> = {
	title: 'molecules/NoAds',
	component: NoAds,
	tags: ['autodocs'],
	argTypes: {
		description: {
			description: 'готов к использованию',
		},
	},
};
export default meta;

type Story = StoryObj<typeof NoAds>;

export const DefaultNoAds: Story = {};
