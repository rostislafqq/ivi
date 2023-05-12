import type { Meta, StoryObj } from '@storybook/react';

import { LoadingBox } from './LoadingBox';

const meta: Meta<typeof LoadingBox> = {
	title: 'Atoms/LoadingBox',
	component: LoadingBox,
	tags: ['autodocs'],
	args: {
		className: '',
	},
	argTypes: {
		rounded: {
			description: 'Уровень скругления',
			control: 'select',
			options: ['small', 'normal'],
		},
		style: {
			description: 'Объект для дополнительной стилизации',
		},
		className: {
			description: 'Добавить класс для Storybook',
		},
	},
};

export default meta;

type Story = StoryObj<typeof LoadingBox>;
export const LoadingText: Story = {
	args: {
		rounded: 'small',
		style: {
			width: 120,
			height: 18,
		},
	},
};

export const LoadingImage: Story = {
	args: {
		rounded: 'normal',
		style: {
			width: 171,
			height: 279,
		},
	},
};
