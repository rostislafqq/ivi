import { render } from '@testing-library/react';
import React from 'react';

import { Badge } from './Badge';

describe('components/atoms/Badge', () => {
	it('should render without props', () => {
		const { getByText } = render(<Badge>Badge</Badge>);

		const badge = getByText('Badge');

		expect(badge).toBeInTheDocument();
		expect(badge).toHaveClass('badge');
	});

	it('should accept an additional class', () => {
		const { getByText } = render(<Badge className="test-class">Badge</Badge>);

		const badge = getByText('Badge');

		expect(badge).toHaveClass('badge');
		expect(badge).toHaveClass('test-class');
	});

	it('should render small badge when size prop is "small"', () => {
		const { getByText } = render(
			<Badge className="test-class" size="small">
				Badge
			</Badge>,
		);

		const badge = getByText('Badge');

		expect(badge).toHaveClass('badge');
		expect(badge).toHaveClass('test-class');
		expect(badge).toHaveClass('badge--small');
	});

	it('should render normal badge when size prop is "normal"', () => {
		const { getByText } = render(
			<Badge className="test-class" size="normal">
				Badge
			</Badge>,
		);

		const badge = getByText('Badge');

		expect(badge).toHaveClass('badge');
		expect(badge).toHaveClass('test-class');
		expect(badge).toHaveClass('badge--normal');
	});

	it('should render red badge when bg prop is "red"', () => {
		const { getByText } = render(
			<Badge className="test-class" bg="red">
				Badge
			</Badge>,
		);

		const badge = getByText('Badge');

		expect(badge).toHaveClass('badge');
		expect(badge).toHaveClass('test-class');
		expect(badge).toHaveClass('badge--red');
	});

	it('should render orange badge when bg prop is "orange"', () => {
		const { getByText } = render(
			<Badge className="test-class" bg="orange">
				Badge
			</Badge>,
		);

		const badge = getByText('Badge');

		expect(badge).toHaveClass('badge');
		expect(badge).toHaveClass('test-class');
		expect(badge).toHaveClass('badge--orange');
	});

	it('should render gray badge when bg prop is "gray"', () => {
		const { getByText } = render(
			<Badge className="test-class" bg="gray">
				Badge
			</Badge>,
		);

		const badge = getByText('Badge');

		expect(badge).toHaveClass('badge');
		expect(badge).toHaveClass('test-class');
		expect(badge).toHaveClass('badge--gray');
	});
});
