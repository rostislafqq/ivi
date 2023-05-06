import { FilmBanner } from './FilmBanner';

import type { Meta, StoryObj } from '@storybook/react';

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
			banner: '/assets/images/promo-slider/img1.jpg',
			href: '/watch/1',
			type: 'subscribe',
			age: '16+',
		},
	},
};
