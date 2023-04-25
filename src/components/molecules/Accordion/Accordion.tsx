import cn from 'classnames';
import React, { useState } from 'react';

import styles from './Accordion.module.scss';

import { Button } from '@/components/atoms';

import type { AccordionProps } from './Accordion.types';

export const Accordion: React.FC<AccordionProps> = ({ content = [], length, buttonValues }) => {
	const accordionClasses = cn(styles.lineClamp);
	const openState = cn(styles.openAcc);

	const [open, setOpen] = useState(false);
	const lineClampStyle = { '--line-clamp': `${length}` } as React.CSSProperties;

	return (
		<>
			<div className={open ? openState : accordionClasses} style={lineClampStyle}>
				{content}
			</div>

			<Button
				onClick={() => {
					setOpen(!open);
				}}
				variant="static"
			>
				{open ? buttonValues[1] : buttonValues[0]}
			</Button>
		</>
	);
};
