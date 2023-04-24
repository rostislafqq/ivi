import { render } from '@testing-library/react';
import React from 'react';

import { Badge } from './Badge';

describe('components/atoms/Badge', () => {
	it('should render without props', () => {
		const { container } = render(<Badge>Badge</Badge>);

		expect(container.firstChild).toBeInTheDocument();
		expect(container.firstChild).toHaveClass('badge');
	});

	it('should accept an additional class', () => {
		const { container } = render(<Badge className="test-class">Badge</Badge>);

		expect(container.firstChild).toHaveClass('badge');
		expect(container.firstChild).toHaveClass('test-class');
	});

	it('should render small badge when size prop is "small"', () => {
		const { container } = render(
			<Badge className="test-class" size="small">
				Badge
			</Badge>,
		);

		expect(container.firstChild).toHaveClass('badge');
		expect(container.firstChild).toHaveClass('test-class');
		expect(container.firstChild).toHaveClass('badge--small');
	});

	it('should render normal badge when size prop is "normal"', () => {
		const { container } = render(
			<Badge className="test-class" size="normal">
				Badge
			</Badge>,
		);

		expect(container.firstChild).toHaveClass('badge');
		expect(container.firstChild).toHaveClass('test-class');
		expect(container.firstChild).toHaveClass('badge--normal');
	});

	it('should render red badge when bg prop is "red"', () => {
		const { container } = render(
			<Badge className="test-class" bg="red">
				Badge
			</Badge>,
		);

		expect(container.firstChild).toHaveClass('badge');
		expect(container.firstChild).toHaveClass('test-class');
		expect(container.firstChild).toHaveClass('badge--red');
	});

	it('should render orange badge when bg prop is "orange"', () => {
		const { container } = render(
			<Badge className="test-class" bg="orange">
				Badge
			</Badge>,
		);

		expect(container.firstChild).toHaveClass('badge');
		expect(container.firstChild).toHaveClass('test-class');
		expect(container.firstChild).toHaveClass('badge--orange');
	});

	it('should render gray badge when bg prop is "gray"', () => {
		const { container } = render(
			<Badge className="test-class" bg="gray">
				Badge
			</Badge>,
		);

		expect(container.firstChild).toHaveClass('badge');
		expect(container.firstChild).toHaveClass('test-class');
		expect(container.firstChild).toHaveClass('badge--gray');
	});
});
