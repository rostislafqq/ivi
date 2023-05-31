import { render } from '@testing-library/react';
import React from 'react';

import { Input } from '../Input/Input';
import { Label } from '../Label/Label';

import { InputGroup } from './InputGroup';

describe('components/atoms/Inputs/InputGroup', () => {
	it('component should be in the document', () => {
		const { getByText } = render(
			<InputGroup className="class">
				<p>sometext</p>
			</InputGroup>,
		);
		const label = getByText('sometext');
		const group = label.parentElement;
		expect(group).toBeInTheDocument();
		expect(group).toHaveClass('inputGroup', 'class');
		expect(group?.tagName).toBe('DIV');
	});

	it('should render with the correct children', () => {
		const { getByRole, getByText } = render(
			<InputGroup>
				<Label className="class">intresting text</Label>
				<Input type="text" value="qwerty" onChange={() => {}} />
			</InputGroup>,
		);
		const label = getByText('intresting text');
		const input = getByRole('textbox');
		expect(label).toBeInTheDocument();
		expect(label.tagName).toBe('P');
		expect(label).toHaveTextContent('intresting text');
		expect(label).toHaveClass('label', 'class');
		expect(input).toBeInTheDocument();
		expect(input).toHaveAttribute('value', 'qwerty');
	});
});
