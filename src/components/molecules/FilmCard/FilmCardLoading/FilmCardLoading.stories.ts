import type { Meta, StoryObj } from '@storybook/react';

import { FilmCardLoading } from './FilmCardLoading';

const meta: Meta<typeof FilmCardLoading> = {
	title: 'Molecules/FilmCard/FilmCardLoading',
	component: FilmCardLoading,
	tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof FilmCardLoading>;

export const CardLoading: Story = {};
