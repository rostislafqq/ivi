import * as React from 'react';
import Link from 'next/link';
import styles from './TextLink.module.scss';
import { TextLinkProps } from './TextLink.types.ts';

export const TextLink: React.FC<TextLinkProps> = ({
	children,
	href,
	className = '',
	isDisabled = false,
	target = '_self',
	handlerClick,
}) => {
	return (
		<Link href={isDisabled ? {} : href} className={className} onClick={() => handlerClick} target={target}>
			{children}
		</Link>
	);
};
