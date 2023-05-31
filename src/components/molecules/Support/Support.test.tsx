import { fireEvent, render } from '@testing-library/react';

import React from 'react';

import { Support } from './Support';

describe('Support component', () => {
	it('it rendered', () => {
		const { getByText } = render(<Support />);
		const supportHeading = getByText('Служба поддержки');
		expect(supportHeading).toBeInTheDocument();
		expect(supportHeading.tagName).toBe('H4');
		expect(supportHeading).toHaveClass('support__heading');

		const write = getByText('Написать в чате');
		expect(write.tagName).toBe('A');
		expect(write).toHaveClass('support__writeBtn');

		const answLink = getByText('ask.ivi.ru');
		expect(answLink.tagName).toBe('A');

		const answrs = getByText('Ответы на вопросы');
		expect(answrs.tagName).toBe('SPAN');
		expect(answrs).toHaveClass('support__answerContent');
	});

	it('should open tel numbers', () => {
		const { getByTestId, getByText } = render(<Support />);
		const telBtn = getByTestId('telBtn');
		const toggleBtn = getByText('+7 383 202-12-80');
		expect(toggleBtn).not.toHaveClass('support__toggleBtn--active');
		fireEvent.click(telBtn);
		expect(toggleBtn).toHaveClass('support__toggleBtn--active');
	});
});
