import { Button } from './Button';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Button> = {
	title: 'Atoms/Button',
	component: Button,
	tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
	args: {
		primary: true,
		label: 'Смотреть по подписке',
		size: 'medium',
	},
};

export const PayBtn: Story = {
	args: {
		size: 'small',
		label: 'Оплатить подписку',
		isPay: true,
	},
};

export const Medium: Story = {
	args: {
		size: 'medium',
		label: 'Написать в чате',
		backgroundColor: 'lightBlack',
	},
};

export const Large: Story = {
	args: {
		size: 'large',
		label: 'Показать еще',
		border: 'white',
	},
};

export const LargeHome: Story = {
	args: {
		size: 'large',
		label: '30 дней подписки за 1 ₽',
		backgroundColor: 'lightBlack',
		backgroundSvg: true,
	},
};
