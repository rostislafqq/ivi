import { render, fireEvent } from '@testing-library/react';
import React from 'react';

import { Accordion } from './Accordion';

describe('components/atoms/Accordion', () => {
	const length = 2;
	const buttonValues = ['открыть', 'закрыть'];
	const content = [
		<>
			<p>some text1</p>
			<p>some text2</p>
		</>,
	];
	it('should render button that swich own text ', () => {
		const { getByRole } = render(<Accordion content={content} length={length} buttonValues={buttonValues} />);
		const button = getByRole('button');

		expect(button).toHaveTextContent('открыть');
		fireEvent.click(button);
		expect(button).toHaveTextContent('закрыть');
	});

	it('should render button that switch div className', () => {
		const { getByRole, getByText } = render(
			<Accordion content={content} length={length} buttonValues={buttonValues} />,
		);
		const button = getByRole('button');
		const div = getByText('some text1').parentElement;
		expect(div).toHaveClass('lineClamp');
		fireEvent.click(button);
		expect(div).toHaveClass('openAcc');
	});

	it('should render div that contain variable `content` ', () => {
		const { getByText } = render(<Accordion content={content} length={length} buttonValues={buttonValues} />);
		const accordionContent1 = getByText('some text1');
		const accordionContent2 = getByText('some text2');
		expect(accordionContent1).toBeInTheDocument();
		expect(accordionContent1.tagName).toBe('P');
		expect(accordionContent2).toBeInTheDocument();
		expect(accordionContent2.tagName).toBe('P');
	});
});
