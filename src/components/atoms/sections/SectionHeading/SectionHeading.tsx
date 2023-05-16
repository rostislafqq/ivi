import cn from 'classnames';
import React from 'react';

import ArrowIcon from '@assets/icons/arrow-right.svg';

import { Badge } from '../../Badge/Badge';
import { Icon } from '../../Icon/Icon';

import { Heading, HeadingLink } from '../../typography';

import styles from './SectionHeading.module.scss';
import { SectionHeadingProps } from './SectionHeading.types';

export const SectionHeading: React.FC<SectionHeadingProps> = ({
	className,
	tag,
	href,
	arrow = false,
	underline = false,
	count,
	children,
}) => {
	const sectionHeadingClasses = cn(styles['section-heading'], className, {
		[styles['section-heading--arrow']]: arrow,
		[styles['section-heading--underline']]: underline,
	});

	if (href) {
		return (
			<HeadingLink className={sectionHeadingClasses} tag={tag} href={href}>
				{children}
				{arrow && <Icon className="arrow" icon={ArrowIcon} width={20} height={40} data-testid="icon" />}
				{!!count && (
					<Badge className={styles['section-heading__badge']} data-testid="badge">
						{count}
					</Badge>
				)}
			</HeadingLink>
		);
	}
	return (
		<Heading className={sectionHeadingClasses} tag={tag}>
			{children}
			{arrow && <Icon className="arrow" icon={ArrowIcon} width={20} height={40} data-testid="icon" />}
			{!!count && (
				<Badge className={styles['section-heading__badge']} data-testid="badge">
					{count}
				</Badge>
			)}
		</Heading>
	);
};
