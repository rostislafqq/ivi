import React from 'react';

import { Input } from '../Input/Input';

import { Label } from '../Label/Label';

import { InputGroup } from './InputGroup';

import styles from './InputGroup.module.scss';

import type { Meta, StoryObj } from '@storybook/react';

import '@/config/globals.scss';

const meta: Meta<typeof InputGroup> = {
	title: 'Atoms/Inputs/InputGroup',
	component: InputGroup,
	tags: ['autodocs'],
	argTypes: {
		children: {
			description: 'содержимое',
		},
	},
};
export default meta;

type Story = StoryObj<typeof InputGroup>;

export const InactiveInputGroup: Story = {
	render: () => (
		<InputGroup>
			<Input className={styles[`input--example`]} onChange={() => {}} type="text" value="" />
			<Label className={styles[`label--example`]}>Фильмы,персоны,жанры</Label>
		</InputGroup>
	),
};

export const ActiveInputGroup: Story = {
	render: () => (
		<InputGroup>
			<Input className={styles[`input--example`]} onChange={() => {}} type="text" value="some intresting text" />
			<Label isActive={false} className={styles[`label--example`]}>
				Фильмы,персоны,жанры
			</Label>
		</InputGroup>
	),
};
