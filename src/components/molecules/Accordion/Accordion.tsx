import cn from 'classnames';
import React, { useState } from 'react';

import styles from './Accordion.module.scss';

import { Button } from '@/components/atoms';

import type { AccordionProps } from './Accordion.types';

export const Accordion: React.FC<AccordionProps> = ({
	className = '',
	children,
	length,
	buttonValues,
	buttonClass,
}) => {
	const accordionClasses = cn(styles.lineClamp, className);
	const openState = cn(styles.openAcc, className);

	const [isOpen, setIsOpen] = useState(false);
	const lineClampStyle = { '--line-clamp': `${length}` } as React.CSSProperties;

	return (
		<>
			<div className={isOpen ? openState : accordionClasses} style={lineClampStyle}>
				{children}
			</div>

			<Button
				className={buttonClass}
				onClick={() => {
					setIsOpen(!isOpen);
				}}
			>
				{isOpen ? buttonValues[1] : buttonValues[0]}
			</Button>
		</>
	);
};
