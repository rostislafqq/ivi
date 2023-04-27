import cn from 'classnames';
import React from 'react';

import styles from './InputGroup.module.scss';

import type { InputGroupProps } from './InputGroup.types';

export const InputGroup: React.FC<InputGroupProps> = ({ className, children }) => {
	const InputGroupClasses = cn(styles.inputGroup, className);
	return <div className={InputGroupClasses}>{children}</div>;
};
