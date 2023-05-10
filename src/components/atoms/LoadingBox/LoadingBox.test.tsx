import { render } from '@testing-library/react';
import React from 'react';

import { LoadingBox } from './LoadingBox';

describe('components/atoms/LoadingBox', () => {
	it('should render with base props: width, height, rounded', () => {
		const { container } = render(<LoadingBox width="180px" height="18px" rounded="small" />);

		expect(container.firstElementChild).toHaveStyle('width: 180px;');
		expect(container.firstElementChild).toHaveStyle('height: 18px;');
		expect(container.firstElementChild).toHaveClass('loading--small');
	});

	it('should accept an additional class', () => {
		const { container } = render(<LoadingBox className="test-class" width="180px" height="18px" rounded="small" />);

		expect(container.firstElementChild).toHaveClass('loading--small');
		expect(container.firstElementChild).toHaveClass('test-class');
	});

	it('should render small border-radius when "rounded" is "small"', () => {
		const { container } = render(<LoadingBox className="test-class" width="180px" height="18px" rounded="small" />);

		expect(container.firstElementChild).toHaveClass('loading--small');
		expect(container.firstElementChild).toHaveClass('test-class');
	});

	it('should render normal border-radius when "rounded" is "normal"', () => {
		const { container } = render(
			<LoadingBox className="test-class" width="180px" height="18px" rounded="normal" />,
		);

		expect(container.firstElementChild).toHaveClass('loading--normal');
		expect(container.firstElementChild).toHaveClass('test-class');
	});
});
