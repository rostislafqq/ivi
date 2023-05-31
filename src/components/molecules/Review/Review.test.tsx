import { render, fireEvent } from '@testing-library/react';

import React from 'react';

import { Review } from './Review';

describe('Review Component - row mode', () => {
	const props = {
		userName: 'Имя Фамилия',
		likes: 5,
		comment:
			'мне 13 лет а я до сих пор не могу оторвать глаз, постоянно их смотрю,прихожу со школы и включаю или карусели или мульт и смотрю вес день.....Хочу...',
		date: '2017-02-26',
		onLike: () => {},
		onDisike: () => {},
	};
	test('test btn', () => {
		const { getByText } = render(<Review {...props} type="row" />);
		let mail = getByText('мне 13 лет а я до сих пор не могу оторвать глаз, постоянно их смотрю,прихожу со школ...');
		expect(mail).toBeInTheDocument();
		const btn = getByText('Свернуть');
		expect(btn.className).toBe('review--row__middleContainer__openBtn');
		expect(btn).toBeInTheDocument();
		fireEvent.click(btn);
		mail = getByText(
			'мне 13 лет а я до сих пор не могу оторвать глаз, постоянно их смотрю,прихожу со школы и включаю или карусели или мульт и смотрю вес день.....Хочу...',
		);
		expect(mail).toBeInTheDocument();
	});
	test('test card render', () => {
		const { getByText } = render(<Review {...props} type="card" />);
		const mail = getByText(
			'мне 13 лет а я до сих пор не могу оторвать глаз, постоянно их смотрю,прихожу со школы и включаю или карусели или мульт и смотрю вес день.....Хочу...',
		);
		expect(mail).toBeInTheDocument();
		expect(mail).toHaveClass('review--block__content');
		expect(mail.tagName).toBe('P');
		const name = getByText('Имя Фамилия');
		expect(name).toBeInTheDocument();
		expect(name.tagName).toBe('P');
		const date = getByText('26 февраля 2017 г.');
		expect(date).toBeInTheDocument();
		expect(date.tagName).toBe('SPAN');
		expect(date).toHaveClass('review--block__bottomContainer__date');
		const likes = getByText('5');
		expect(likes).toHaveClass('review--block__bottomContainer__likeCount review__like--green');
	});
});
