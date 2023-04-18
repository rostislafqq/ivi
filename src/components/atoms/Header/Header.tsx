/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable no-console */
/* eslint-disable import/prefer-default-export */
/* eslint-disable react/require-default-props */
import cn from 'classnames';
import React from 'react';

import styles from './header.module.scss';

interface HeaderProps {
	/**
	 * h1,h2
	 */
	main: boolean;
	/**
	 * содержимое
	 */
	/**
	 * tiny-15 , small-20 , medium-24 , large-40 , huge-56
	 */
	size: 'tiny' | 'small' | 'medium' | 'large' | 'huge';
	label?: string;
	/**
	 * черный для проверки
	 */
	black?: boolean;
	/**
	 * необходимость выравнивания по центру
	 */
	center?: boolean;
}

export const Header = ({ label, main = false, black = false, center = false, size = 'medium' }: HeaderProps) => {
	const labelClass = cn({
		[styles.header]: true,
		[styles[`header__${size}`]]: true,
		[styles.header__black]: black,
		[styles.header__center]: center,
	});

	return <>{main ? <h1 className={labelClass}>{label}</h1> : <h2 className={labelClass}>{label}</h2>}</>;
};
