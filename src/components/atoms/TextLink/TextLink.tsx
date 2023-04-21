import * as React from 'react';
import classNames from 'classnames';
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
	bold = false,
}) => {
	const classes = classNames(className, { [styles.bold]: bold });

	return (
		<Link
			href={href}
			className={classes}
			onClick={() => handlerClick}
			target={target}
			as={isDisabled ? 'span' : 'a'}
		>
			{children}
		</Link>
	);
};
