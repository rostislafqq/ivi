import type { Meta, StoryObj } from '@storybook/react';

import { Header } from './Header';

const meta: Meta<typeof Header> = {
	title: 'Organisms/Header',
	component: Header,
	argTypes: {
		className: {
			description: 'Добавить класс для Storybook',
		},
	},
};

export default meta;

type Story = StoryObj<typeof Header>;

export const Default: Story = {
	args: {},
};
