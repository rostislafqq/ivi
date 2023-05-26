import cn from 'classnames';
import React from 'react';

import { TextLink } from '@/components/atoms';

import styles from './Breadcrumb.module.scss';
import { BreadcrumbProps } from './Breadcrumb.types';

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ items, variant, className }) => {
	const breadcrumbClasses = cn(styles.breadcrumb, className, {
		[styles['breadcrumb--classic']]: variant === 'classic',
		[styles['breadcrumb--modern']]: variant === 'modern',
	});

	return (
		<nav className={breadcrumbClasses} aria-label="breadcrumb">
			<ul className="breadcrumb-menu">
				{items.map((item) => (
					<li key={item.href} className={cn('breadcrumb-item', { active: !!item.active })}>
						<TextLink
							className={cn('breadcrumb-text', { active: !!item.active })}
							tag="span"
							href={item.href}
						>
							{item.label}
						</TextLink>
					</li>
				))}
			</ul>
		</nav>
	);
};
