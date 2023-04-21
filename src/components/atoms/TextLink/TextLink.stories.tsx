import type { Meta, StoryObj } from '@storybook/react';
import { TextLink } from './TextLink';

const meta: Meta<typeof TextLink> = {
	title: 'Atoms/TextLink',
	component: TextLink,
	tags: ['autodocs'],
	decorators: [
		(Story) => (
			<div style={{ color: '#fff' }}>
				<Story />
			</div>
		),
	],
};

export default meta;

type Story = StoryObj<typeof TextLink>;

export const Default: Story = {
	args: {
		children: 'text link',
		href: '#',
	},
};

export const Bold: Story = {
	args: {
		children: 'text link',
		href: '#',
		bold: true,
	},
};
