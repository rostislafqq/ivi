/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { render } from '@testing-library/react';

import React from 'react';

import { Download } from './Download';

import tg from '@assets/icons/social/tg.svg';

describe('/components/molecules/Share/Download', () => {
	it('should render ul whitch contain 4 li and 4 links', () => {
		const { getByRole, getAllByRole } = render(<Download />);
		const list = getByRole('list');
		const listItem = getAllByRole('listitem');
		const button = getAllByRole('link');
		expect(list.tagName).toBe('UL');
		expect(list).toHaveClass('download');
		expect(listItem).toHaveLength(4);
		expect(button).toHaveLength(4);
	});

	it('render empty ul when give prop default=false', () => {
		const { getByRole } = render(<Download isDefault={false} />);
		const list = getByRole('list');
		expect(list).toHaveClass('download');
		expect(list.childElementCount).toBe(0);
	});

	it('correct render with custom props', () => {
		const { getByRole, getByText } = render(
			<Download
				isDefault={false}
				contentData={[{ icon: tg, width: 22, boldText: 'что-то умное', href: 'link' }]}
			/>,
		);
		const list = getByRole('list');
		expect(list.childElementCount).toBe(1);

		const text = getByText('что-то умное');
		expect(text).toBeInTheDocument();
		expect(text.tagName).toBe('P');
		expect(text).toHaveClass('download__text-bold');
	});
});
