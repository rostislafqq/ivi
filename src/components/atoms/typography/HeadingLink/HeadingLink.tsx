import cn from 'classnames';
import Link from 'next/link';
import React from 'react';

import { Heading } from '../Heading/Heading';

import type { HeadingLinkProps } from './HeadingLink.types';

import styles from './HeadingLink.module.scss';

export const HeadingLink: React.FC<HeadingLinkProps> = ({ className, tag, href, children }) => {
	const headingLinkClasses = cn(styles['heading-link'], className);

	return (
		<Heading className={headingLinkClasses} tag={tag}>
			<Link className="link" href={href}>
				{children}
			</Link>
		</Heading>
	);
};
