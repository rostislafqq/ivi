import { render } from '@testing-library/react';
import React from 'react';

import { SubscribeButton } from './SubscribeButton';

describe('components/molecules/SubscribeButton', () => {
	it('should render SubscribeButton', () => {
		const { container, getByText } = render(
			<SubscribeButton href="/test-url">30 дней подписки бесплатно</SubscribeButton>,
		);

		expect(container.firstElementChild).toBeInTheDocument();
		expect(container.firstElementChild).toHaveAttribute('href', '/test-url');
		expect(getByText('30 дней подписки бесплатно')).toBeInTheDocument();
	});

	it('should render the icon inside component', () => {
		const { getByTestId } = render(<SubscribeButton href="/test-url">30 дней подписки бесплатно</SubscribeButton>);

		expect(getByTestId('subscribe-btn__icon')).toBeInTheDocument();
	});

	it('should accept an additional class', () => {
		const { container } = render(
			<SubscribeButton className="test-class" href="/test-url">
				30 дней подписки бесплатно
			</SubscribeButton>,
		);

		expect(container.firstElementChild).toHaveClass('subscribe-btn');
		expect(container.firstElementChild).toHaveClass('test-class');
	});
});
