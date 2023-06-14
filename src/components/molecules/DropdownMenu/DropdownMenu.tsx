import cn from 'classnames';
import React, { useRef } from 'react';

import { useClickOutside } from '@/app/hooks';

import type { DropdownMenuProps } from './DropdownMenu.types';

import styles from './DropdownMenu.module.scss';

export const DropdownMenu: React.FC<DropdownMenuProps> = ({
	isOpened,
	setIsOpened,
	button,
	children,
	className,
	menuClassName,
	...props
}) => {
	const dropdownRef = useRef<HTMLDivElement>(null);

	useClickOutside(dropdownRef, () => {
		setIsOpened(false);
	});

	return (
		<div className={cn(styles.dropdown, className)} ref={dropdownRef} {...props}>
			{button}

			<div className={cn(styles['dropdown-menu'], menuClassName)} data-opened={isOpened}>
				{children}
			</div>
		</div>
	);
};
