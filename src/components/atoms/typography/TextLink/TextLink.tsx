import cn from 'classnames';
import Link from 'next/link';
import React from 'react';

import { Text } from '../Text/Text';

import styles from './TextLink.module.scss';
import { TextLinkProps } from './TextLink.types';

export const TextLink: React.FC<TextLinkProps> = ({ className, tag, href, children, onMouseOut, onMouseOver }) => {
	const textClasses = cn(styles['text-link'], className);

	return (
		<Text tag={tag} className={textClasses}>
			<Link className="link" href={href} onMouseOut={onMouseOut} onMouseOver={onMouseOver}>
				{children}
			</Link>
		</Text>
	);
};
