import { fireEvent, render } from '@testing-library/react';
import React from 'react';

import { Input } from './Input';

describe('components/atoms/Inputs/Input', () => {
	it('should render with correct type, value and onChange', () => {
		const handleChange = jest.fn();
		const { getByRole } = render(<Input type="text" value="qwerty" onChange={handleChange} />);
		const inputElement = getByRole('textbox');
		expect(inputElement).toHaveAttribute('type', 'text');
		expect(inputElement).toHaveValue('qwerty');
		fireEvent.change(inputElement, { target: { value: '1' } });
		expect(handleChange).toHaveBeenCalledTimes(1);
	});
});
