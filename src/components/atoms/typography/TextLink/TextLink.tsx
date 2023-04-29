import cn from 'classnames';
import Link from 'next/link';
import React from 'react';

import styles from './TextLink.module.scss';
import { TextLinkProps } from './TextLink.types';

import { Text } from '../Text/Text';

export const TextLink: React.FC<TextLinkProps> = ({ className, tag, href, children, onMouseOut, onMouseOver }) => {
	const textClasses = cn(styles['text-link'], className);

	return (
		<Text className={textClasses} tag={tag}>
			<Link className="link" href={href} onMouseOut={onMouseOut} onMouseOver={onMouseOver}>
				{children}
			</Link>
		</Text>
	);
};
