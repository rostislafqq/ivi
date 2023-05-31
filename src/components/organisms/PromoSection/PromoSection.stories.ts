import type { Meta, StoryObj } from '@storybook/react';

import { PromoSection } from './PromoSection';

const meta: Meta<typeof PromoSection> = {
	title: 'Organisms/PromoSection',
	component: PromoSection,
	tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof PromoSection>;
export const Default: Story = {};
