import React from 'react';

import { Menu as MenuComponent } from './Menu';
import { MenuItem } from '@components/atoms';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof MenuComponent> = {
	title: 'Molecules/Menu',
	component: MenuComponent,
	tags: ['autodocs'],
	argTypes: {
		children: {
			type: 'function',
			name: 'menu items',
			description: 'содержимое меню',
		},
		title: {
			type: 'string',
			name: 'title',
			description: 'Добавить заголовок для меню',
			control: 'text',
		},
		isHorizontal: {
			type: 'boolean',
			name: 'isHorizontal',
			description: '',
			control: 'boolean',
		},
	},
	args: {
		children: (
			<>
				<MenuItem text={'item1'} href={'#item1'} className={''} />
				<MenuItem text={'item2'} href={'#item2'} />
				<MenuItem text={'item3'} href={'#item3'} />
				<MenuItem text={'item4'} href={'#item4'} />
			</>
		),
	},
};

export default meta;

type Story = StoryObj<typeof MenuComponent>;

export const Default: Story = {
	render: (args) => {
		console.log(args);
		return <MenuComponent {...args} />;
	},
};

export const Vertical: Story = {
	render: (arg) => <MenuComponent {...arg} />,
	args: {
		isHorizontal: false,
	},
};

export const MenuWithTitle: Story = {
	render: (arg) => <MenuComponent {...arg} />,
	args: {
		title: 'Title',
		isHorizontal: false,
	},
};
