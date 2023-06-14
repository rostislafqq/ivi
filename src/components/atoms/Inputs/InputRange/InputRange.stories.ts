import type { Meta, StoryObj } from '@storybook/react';

import { InputRange } from './InputRange';

const meta: Meta<typeof InputRange> = {
	title: 'Atoms/Inputs/InputRange',
	component: InputRange,
	argTypes: {
		value: {
			description: 'Текущее значение',
		},
		onChange: {
			action: 'change',
			description: 'обработчик события изменения',
		},
		step: {
			description: 'Шаг',
		},
		minValue: {
			description: 'Минимальное значение',
		},
		maxValue: {
			description: 'Максимальное значение',
		},
		className: {
			description: 'Добавить класс для Storybook',
		},
	},
	tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof InputRange>;

export const Default: Story = {
	args: {
		value: 15,
	},
};
