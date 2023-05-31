import type { Meta, StoryObj } from '@storybook/react';

import { FilmExtraInfo } from './FilmExtraInfo';

const meta: Meta<typeof FilmExtraInfo> = {
	title: 'Molecules/FilmExtraInfo',
	component: FilmExtraInfo,
	tags: ['autodocs'],
	argTypes: {
		langs: {
			description: 'языки ',
		},
		badges: {
			description: 'качество изображения ',
		},
	},
};

export default meta;

type Story = StoryObj<typeof FilmExtraInfo>;

export const NoPhoto: Story = {
	args: {
		langs: ['рус', 'анг'],
		badges: ['FullHD', 'HD', '720p'],
	},
};
