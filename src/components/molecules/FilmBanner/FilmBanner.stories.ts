import type { Meta, StoryObj } from '@storybook/react';

import { FilmBanner } from './FilmBanner';

const meta: Meta<typeof FilmBanner> = {
	title: 'Molecules/FilmBanner',
	component: FilmBanner,
	tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof FilmBanner>;
export const Default: Story = {
	args: {
		banner: {
			name: 'Богомол',
			banner: '/assets/images/banners/img1.jpg',
			href: '/watch/1',
			type: 'subscribe',
			age: '16+',
		},
	},
};
