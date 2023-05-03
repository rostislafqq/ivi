/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Download } from './Download';

import tg from '@assets/icons/social/tg.svg';

import type { Meta, StoryObj } from '@storybook/react';

import '@/config/globals.scss';

const meta: Meta<typeof Download> = {
	title: 'molecules/Share/Download',
	component: Download,
	tags: ['autodocs'],
	argTypes: {
		isDefault: {
			description: 'указывать если нужен не дефолтный(как в футере) компонент',
		},
		contentData: {
			description: 'кастомные данные (при isDefault=false)',
		},
	},
};
export default meta;

type Story = StoryObj<typeof Download>;

export const DefaultDownload: Story = {};

export const JustOneDownload: Story = {
	args: {
		isDefault: false,
		contentData: [{ icon: tg, width: 22, boldText: 'что-то умное', href: 'link' }],
	},
};
