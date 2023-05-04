import { render } from '@testing-library/react';
import React from 'react';

import { Download } from './Download';

describe('component/molecules/Social/Download', () => {
	it('renders a list with 4 list items and same btns', () => {
		const { getByRole, getAllByRole } = render(<Download />);
		const ul = getByRole('list');
		const listItems = getAllByRole('listitem');
		const buttons = getAllByRole('link');

		expect(ul).toBeInTheDocument();
		expect(listItems).toHaveLength(4);
		expect(buttons).toHaveLength(4);
	});
});
