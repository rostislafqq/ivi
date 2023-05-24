import { render } from '@testing-library/react';
import React from 'react';

import { CreatorsCard } from './CreatorsCard';

describe('components/molecules/CreatorsCard', () => {
	test('should render with correct props data', () => {
		const { getByText, getByRole, getByTestId } = render(
			<CreatorsCard className="testClass" href="/test" name="name" surname="surn" size="small" type="circle" />,
		);

		const name = getByText(
			(content, element) =>
				element != null &&
				element.tagName.toLowerCase() === 'p' &&
				content.includes('name') &&
				content.includes('surn'),
		);

		expect(name).toBeInTheDocument();
		expect(name.tagName).toBe('P');
		expect(name).toHaveClass('card--small__text--bold card--small__text');

		const card = getByRole('link');
		expect(card).toHaveAttribute('href', '/test');
		expect(card).toHaveClass('testClass card card--small');
	});
	test('check useFilmCount . shuld return "актер"', () => {
		const { getByText } = render(
			<CreatorsCard
				extra="актер"
				className="testClass"
				href="/test"
				name="name"
				surname="surn"
				size="small"
				type="circle"
			/>,
		);
		const extra = getByText('актер');
		expect(extra.tagName).toBe('SPAN');
		expect(extra).toBeInTheDocument();
	});
	test('check useFilmCount . shuld return "1 фильм"', () => {
		const { getByText } = render(
			<CreatorsCard
				extra={1}
				className="testClass"
				href="/test"
				name="name"
				surname="surn"
				size="small"
				type="circle"
			/>,
		);
		const extra = getByText('1 фильм');
		expect(extra.tagName).toBe('SPAN');
		expect(extra).toBeInTheDocument();
	});
});
