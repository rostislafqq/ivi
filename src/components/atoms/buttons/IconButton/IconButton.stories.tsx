import React from 'react';

import { IconButton } from './IconButton';

import { mapping, options } from '@app/data/iconsStorybookOptions';

import BookmarkIcon from '@assets/icons/bookmark.svg';
import { Icon } from '@components/atoms';

import type { Meta, StoryObj } from '@storybook/react';
import '@/config/globals.scss';

const meta: Meta<typeof IconButton> = {
	title: 'Atoms/Buttons/IconButton',
	component: IconButton,
	tags: ['autodocs'],
	argTypes: {
		size: {
			type: 'string',
			name: 'Size',
			description: 'Размер',
			options: ['normal', 'big'],
			control: {
				type: 'select',
			},
		},
		type: {
			type: 'string',
			name: 'Type',
			description: 'Тип кнопки',
			defaultValue: 'button',
			options: ['button', 'submit', 'reset'],
			control: {
				type: 'select',
			},
		},
		variant: {
			type: 'string',
			name: 'Variant',
			description: 'Варианты кнопок',
			options: ['primary', 'primary-gradient', 'secondary'],
			control: {
				type: 'select',
			},
		},
		className: {
			type: 'string',
			name: 'className',
			description: 'Добавить класс для StoryBook',
			defaultValue: '',
		},
		children: {
			type: 'string',
			name: 'Icon',
			description: 'Иконка',
			options,
			mapping,
			control: 'select',
		},
	},
};

export default meta;

type Story = StoryObj<typeof IconButton>;

export const Primary: Story = {
	args: {
		children: <Icon icon={BookmarkIcon} width={16} />,
		size: 'normal',
		type: 'button',
		variant: 'primary',
		className: '',
	},
};

export const PrimaryGradient: Story = {
	args: {
		children: <Icon icon={BookmarkIcon} width={16} />,
		size: 'normal',
		type: 'button',
		variant: 'primary-gradient',
		className: '',
	},
};

export const Secondary: Story = {
	args: {
		children: <Icon icon={BookmarkIcon} width={16} />,
		size: 'normal',
		type: 'button',
		variant: 'secondary',
		className: '',
	},
};

export const ButtonLink: Story = {
	args: {
		children: <Icon icon={BookmarkIcon} width={16} />,
		size: 'normal',
		type: 'button',
		variant: 'primary',
		href: 'https://www.ivi.ru/watch/504121',
		className: '',
	},
};
