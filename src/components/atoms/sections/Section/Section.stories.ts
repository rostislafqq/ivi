import type { Meta, StoryObj } from '@storybook/react';

import { Section } from './Section';

const meta: Meta<typeof Section> = {
	title: 'Atoms/Sections/Section',
	component: Section,
	tags: ['autodocs'],
	argTypes: {
		id: {
			description: 'ID',
		},
		tag: {
			options: ['section', 'div'],
			control: 'select',
			description: 'Тег',
		},
		children: {
			name: 'Label',
			description: 'Содержимое',
		},
		className: {
			description: 'Добавить класс для StoryBook',
		},
	},
};
export default meta;

type Story = StoryObj<typeof Section>;
export const Default: Story = {
	args: {
		children: 'Section',
		id: 'section-id',
		tag: 'section',
	},
};
