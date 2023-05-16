import cn from 'classnames';
import React, { useState } from 'react';

import { Button } from '@/components/atoms';

import type { AccordionProps } from './Accordion.types';

import styles from './Accordion.module.scss';

export const Accordion: React.FC<AccordionProps> = ({ children, length, buttonValues, buttonClass }) => {
	const accordionClasses = cn(styles.lineClamp);
	const openState = cn(styles.openAcc);

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
