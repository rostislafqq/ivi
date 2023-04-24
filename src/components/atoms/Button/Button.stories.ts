import { Button } from './Button';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Button> = {
	title: 'Atoms/Button',
	component: Button,
	tags: ['autodocs'],
	argTypes: {
		variant: {
			description: 'lightBlack-темный , primary-красный , pay-разноцветный , static-без фона',
		},
		backgroundSvg: {
			description: 'свг фон у кнопки',
		},
	},
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
	args: {
		variant: 'primary',
		children: 'Смотреть по подписке',
		size: 'medium',
	},
};

export const PayBtn: Story = {
	args: {
		size: 'small',
		children: 'Оплатить подписку',
		variant: 'pay',
	},
};

export const Medium: Story = {
	args: {
		size: 'medium',
		children: 'Написать в чате',
		variant: 'lightBlack',
	},
};

export const Large: Story = {
	args: {
		size: 'large',
		children: 'Показать еще',
		border: 'white',
		variant: 'lightBlack',
	},
};

export const LargeHome: Story = {
	args: {
		size: 'large',
		children: '30 дней подписки за 1 ₽',
		variant: 'lightBlack',
		backgroundSvg: true,
	},
};
