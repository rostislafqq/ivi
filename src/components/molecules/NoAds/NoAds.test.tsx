/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { render, screen } from '@testing-library/react';

import React from 'react';

import { NoAds } from './NoAds';

describe('/components/molecules/NoAds', () => {
	it('should be correct render', () => {
		const { getByRole } = render(<NoAds />);
		const text = screen.getByText(/смотрите фильмы, сериалы и мультфильмы без рекламы/i);
		expect(text.tagName).toBe('P');
		expect(text).toHaveClass('noAds__text');
		const btn = getByRole('button');
		expect(btn).toBeInTheDocument();
		expect(btn).toHaveClass('noAds__btn');
	});
});
