/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable no-console */
/* eslint-disable import/prefer-default-export */
/* eslint-disable react/require-default-props */
import cn from 'classnames';
import React from 'react';

import styles from './label.module.scss';

interface LabelProps {
	backgroundColor?: 'red' | 'orange' | 'gray';

	size?: 'small' | 'medium';
	/**
	 * содержимое
	 */
	label?: string;
}

export const Label = ({ size = 'medium', backgroundColor = 'red', label }: LabelProps) => {
	const labelClass = cn({
		[styles.label]: true,
		[styles[`label__${size}`]]: true,
		[styles[`label__backgroundColor__${backgroundColor}`]]: true,
	});

	return <p className={labelClass}>{label}</p>;
};
