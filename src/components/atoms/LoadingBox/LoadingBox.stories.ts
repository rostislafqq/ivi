import type { Meta, StoryObj } from '@storybook/react';

import { LoadingBox } from './LoadingBox';

const meta: Meta<typeof LoadingBox> = {
	title: 'Atoms/LoadingBox',
	component: LoadingBox,
};

export default meta;

type Story = StoryObj<typeof LoadingBox>;
export const LoadingText: Story = {
	args: {
		width: '120px',
		height: '18px',
		rounded: 'small',
	},
};

export const LoadingImage: Story = {
	args: {
		width: '171px',
		height: '279px',
		rounded: 'normal',
	},
};
