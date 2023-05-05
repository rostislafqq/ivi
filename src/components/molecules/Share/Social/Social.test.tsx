/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { render } from '@testing-library/react';

import React from 'react';

import { Social } from './Social';

import tg from '@assets/icons/social/tg.svg';

describe('/components/molecules/Share/Social', () => {
	it('should render ul whitch contain 6 li and 6 links', () => {
		const { getByRole, getAllByRole } = render(<Social />);
		const list = getByRole('list');
		const listItem = getAllByRole('listitem');
		const button = getAllByRole('link');
		expect(list.tagName).toBe('UL');
		expect(list).toHaveClass('social');
		expect(listItem).toHaveLength(6);
		expect(button).toHaveLength(6);
	});

	it('should be empty', () => {
		const { getByRole } = render(<Social key={2} isDefault={false} />);
		const list = getByRole('list');
		expect(list.childElementCount).toBe(0);
	});

	it('correct render with props', () => {
		const { getByRole } = render(<Social key={1} isDefault={false} items={[{ icon: tg, width: 16 }]} />);
		const list = getByRole('list');
		expect(list.childElementCount).toBe(1);
		const link = getByRole('link');
		expect(link.tagName).toBe('A');
		expect(link).toHaveClass('social__btn');
	});
});
