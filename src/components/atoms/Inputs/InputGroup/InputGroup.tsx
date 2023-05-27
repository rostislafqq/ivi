import cn from 'classnames';
import React from 'react';

import type { InputGroupProps } from './InputGroup.types';

import styles from './InputGroup.module.scss';

export const InputGroup: React.FC<InputGroupProps> = ({ className, children }) => {
	const InputGroupClasses = cn(styles.inputGroup, className);
	return <div className={InputGroupClasses}>{children}</div>;
};
