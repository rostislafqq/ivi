import cn from 'classnames';
import React from 'react';

import type { InputProps } from './Input.types';

import styles from './Input.module.scss';

export const Input: React.FC<InputProps> = ({ className, value = '', type = 'text', onChange }) => {
	const InputClasses = cn(styles.input, className);
	return <input value={value} onChange={onChange} className={InputClasses} type={type} />;
};
