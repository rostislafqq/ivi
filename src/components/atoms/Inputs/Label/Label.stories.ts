import type { Meta, StoryObj } from '@storybook/react';

import { Label } from './Label';

import '@/config/globals.scss';

const meta: Meta<typeof Label> = {
	title: 'Atoms/Inputs/Label',
	component: Label,
	tags: ['autodocs'],
	argTypes: {
		children: {
			description: 'содержимое',
		},
		isActive: {
			description: 'при изменении будет уезжать вверх/центр',
		},
		className: {
			description: 'нужно указать положение слева',
		},
	},
};
export default meta;

type Story = StoryObj<typeof Label>;
export const DefaultLabel: Story = {
	args: {
		children: 'some text',
	},
};
