import { render } from '@testing-library/react';
import React from 'react';

import { Rating } from './Rating';

describe('components/atoms/Rating', () => {
	test('test for small gray', () => {
		const { getByText } = render(<Rating size="small" rating={6} />);
		const rating = getByText('6');
		expect(rating).toBeInTheDocument();
		expect(rating.tagName).toBe('DIV');
		expect(rating).toHaveClass('rating--small--gray');
		expect(rating.parentElement).toHaveClass('rating--small');
	});
	test('test green bc', () => {
		const { getByText } = render(<Rating size="small" rating={7} />);
		const rating = getByText('7');
		expect(rating).toBeInTheDocument();
		expect(rating.tagName).toBe('DIV');
		expect(rating).toHaveClass('rating--small--green');
		expect(rating.parentElement).toHaveClass('rating--small');
	});
	test('correct large', () => {
		const { getByText } = render(<Rating extra="Интересный сюжет" assessment={1234} size="large" rating={6} />);
		const extra = getByText('Интересный сюжет');
		const asse = getByText('1234 оценки');
		const text = getByText('Рейтинг Иви');
		expect(extra.tagName).toBe('P');
		expect(asse.tagName).toBe('P');
		expect(text.tagName).toBe('P');
		expect(extra).toHaveClass('rating__textBlock__extra');
		expect(text).toHaveClass('rating__textBlock__title');
		expect(asse).toHaveClass('rating__textBlock__assCount');
	});
});
