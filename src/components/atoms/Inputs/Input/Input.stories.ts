import { Input } from './Input';

import type { Meta, StoryObj } from '@storybook/react';

import '@/config/globals.scss';

const meta: Meta<typeof Input> = {
	title: 'Atoms/Inputs/Input',
	component: Input,
	tags: ['autodocs'],
	argTypes: {
		type: {
			description: 'text/number etc',
		},
		onChange: {
			description: 'функция для заполения value',
		},
		value: {
			description: 'значение в input`e',
		},
		className: {
			description: 'нужно задать падинги ',
		},
	},
};
export default meta;

type Story = StoryObj<typeof Input>;
export const DefaultInput: Story = {};
