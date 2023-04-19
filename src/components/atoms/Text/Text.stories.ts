import { Text } from './Text';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Text> = {
	title: 'Atoms/Text',
	component: Text,
	tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Red: Story = {
	args: {
		children: 'Подписка',
		size: 'small',
		color: 'red',
	},
};

export const Blue: Story = {
	args: {
		children: 'Покупка',
		size: 'small',
		color: 'blue',
	},
};

export const Gray: Story = {
	args: {
		children: 'Бесплатно',
		size: 'small',
		color: 'gray',
		type: 'span',
	},
};

export const CommonText: Story = {
	args: {
		children:
			'Молодой и быстро преуспевший американский писатель Маркус Голдман, не находя вдохновения для новой книги, приезжает в маленький городок к своему старшему коллеге, учителю и другу Гарри Квеберту. Неожиданно Гарри оказывается в центре шокирующего скандала: его обвиняют в убийстве бывшей возлюбленной, несовершеннолетней девушки Нолы, которую признали пропавшей без вести 33 года назад',
		size: 'medium',
		color: 'gray',
		type: 'p',
	},
};

export const Square: Story = {
	args: {
		square: true,
		color: 'gray',
		type: 'div',
	},
};
