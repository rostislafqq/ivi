import cn from 'classnames';
import React from 'react';

import styles from './Section.module.scss';
import { SectionProps } from './Section.types';

export const Section: React.FC<SectionProps> = ({ id, className, tag = 'section', children }) => {
	const sectionClasses = cn(styles.section, className);

	switch (tag) {
		case 'section':
			return (
				<section id={id} className={sectionClasses}>
					{children}
				</section>
			);
		case 'div':
			return (
				<div id={id} className={sectionClasses}>
					{children}
				</div>
			);
		default:
			return null;
	}
};
