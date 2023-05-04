import { SectionHeader } from './SectionHeader';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof SectionHeader> = {
	title: 'Atoms/Sections/SectionHeader',
	component: SectionHeader,
	tags: ['autodocs'],
	argTypes: {
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

type Story = StoryObj<typeof SectionHeader>;
export const Default: Story = {
	args: {
		children: 'Section Header',
	},
};
