import { render } from '@testing-library/react';

import React from 'react';

import { Label } from './Label';

describe('components/atoms/Inputs/Label', () => {
	it('component should be correct and to be', () => {
		const { getByText } = render(<Label isActive={false}>real content</Label>);
		const label = getByText('real content');
		expect(label).toBeInTheDocument();
		expect(label).toHaveTextContent('real content');
		expect(label.tagName).toBe('P');
		expect(label).toHaveClass('label', 'label--active');
	});
});
