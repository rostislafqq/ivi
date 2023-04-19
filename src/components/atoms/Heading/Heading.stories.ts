import { Header } from './Heading';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Header> = {
	title: 'Atoms/Heading',
	component: Header,
	tags: ['autodocs'],
	argTypes: {
		size: {
			description: 'tiny-1.5 , small-2 , medium-2.4 , large-4 , huge-5.6(rem)',
		},
		headingLevel: {
			description: 'уровень заголовка h1,h2...h5',
		},
		center: {
			description: 'необходимость выравнивания по центру',
		},
		black: {
			description: 'черный для проверки',
		},
	},
};

export default meta;
type Story = StoryObj<typeof Header>;

export const Main: Story = {
	args: {
		children: 'Черепашки-ниндзя (2012) (Мультфильм 2012)',
		headingLevel: 'h1',
		black: true,
		center: true,
		size: 'huge',
	},
};
