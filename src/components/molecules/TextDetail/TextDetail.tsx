import cn from 'classnames';
import React, { useState } from 'react';

import styles from './TextDetail.module.scss';

import { Button } from '@/components/atoms';

import type { TextDetailProps } from './TextDetail.types';

export const TextDetail: React.FC<TextDetailProps> = ({
	showContent = [],
	staticContent = [],
	length,
	buttonValues,
	className,
}) => {
	const TextDetailClasses = cn(styles.lineClamp);
	const ContainerClass = cn(className);
	const [open, setOpen] = useState(true);
	const lineClampStyle = { '--line-clamp': `${length}` } as React.CSSProperties;
	return (
		<section className={ContainerClass}>
			{staticContent.map((v) => v)}
			<div className={open ? '' : TextDetailClasses} style={lineClampStyle}>
				{showContent.map((v) => v)}
			</div>

			<Button
				onClick={() => {
					setOpen(!open);
				}}
				variant="static"
			>
				{open ? buttonValues[1] : buttonValues[0]}
			</Button>
		</section>
	);
};
