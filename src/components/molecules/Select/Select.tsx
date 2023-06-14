import cn from 'classnames';
import React, { useState, useCallback } from 'react';

import { Icon } from '@/components/atoms';

import arrowBottomIcon from '@assets/icons/arrow-bottom.svg';

import { DropdownMenu } from '../DropdownMenu/DropdownMenu';

import type { SelectProps } from './Select.types';

import styles from './Select.module.scss';

export const Select: React.FC<SelectProps> = ({
	children,
	label,
	selectedOptions,
	selectedLabel,
	className,
	menuClassName,
	buttonClassName,
}) => {
	const [isOpened, setIsOpened] = useState(false);

	const getSelectedLabel = useCallback(() => {
		if (selectedLabel) return selectedLabel;

		if (Array.isArray(selectedOptions)) {
			return selectedOptions.map((selected) => selected.label).join(', ');
		}
		if (selectedOptions?.label) {
			return selectedOptions.label;
		}

		return '';
	}, [selectedOptions, selectedLabel]);

	const shouldRenderSelectedOptionsLabel = useCallback(() => !!getSelectedLabel().length, [getSelectedLabel]);

	return (
		<DropdownMenu
			className={className}
			isOpened={isOpened}
			setIsOpened={setIsOpened}
			button={
				<button
					className={cn(styles['select-btn'], buttonClassName)}
					type="button"
					data-opened={isOpened}
					onClick={() => setIsOpened((prevState) => !prevState)}
				>
					<div className={styles['select-btn__left']}>
						<div className={styles['select-btn__label']}>{label}</div>
						{shouldRenderSelectedOptionsLabel() && (
							<div className={styles['select-btn__selected']}>{getSelectedLabel()}</div>
						)}
					</div>
					<Icon
						className={cn(styles['select-btn__arrow'], {
							[styles['select-btn__arrow--active']]: isOpened,
						})}
						icon={arrowBottomIcon}
						width={20}
						height={20}
					/>
				</button>
			}
			menuClassName={menuClassName}
		>
			{children}
		</DropdownMenu>
	);
};
