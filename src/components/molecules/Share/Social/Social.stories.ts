/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Social } from './Social';

import tg from '@assets/icons/social/tg.svg';

import type { Meta, StoryObj } from '@storybook/react';

import '@/config/globals.scss';

const meta: Meta<typeof Social> = {
	title: 'molecules/Share/Social',
	component: Social,
	tags: ['autodocs'],
	argTypes: {
		isDefault: {
			description: 'указывать если нужно не дефолтное(как в футере) кл-во кружочков ',
		},
	},
};
export default meta;

type Story = StoryObj<typeof Social>;

export const DefaultSocial: Story = {};

export const JustOneSocial: Story = {
	args: {
		isDefault: false,
		items: [{ icon: tg, width: 16, key: '11dd2' }],
	},
};
