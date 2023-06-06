import cn from 'classnames';
import React, { useState, useCallback, useRef } from 'react';

import { useClickOutside } from '@/app/hooks';
import { capitalize } from '@/app/utils';
import { Icon } from '@/components/atoms';
import arrowBottomIcon from '@assets/icons/arrow-bottom.svg';
import barsIcon from '@assets/icons/bars-3-bottom-right.svg';

import type { SortByProps, SortByOptionType } from './SortBy.types';

import styles from './SortBy.module.scss';

export const SortBy: React.FC<SortByProps> = ({ className, options, selectedOption, setSelectedOption, ...props }) => {
	const [isOpened, setIsOpened] = useState(false);
	const sortByRef = useRef<HTMLDivElement>(null);

	useClickOutside(sortByRef, () => {
		setIsOpened(false);
	});

	const onToggleOpened = useCallback(() => {
		setIsOpened((prevState) => !prevState);
	}, []);

	const onSelectedOption = useCallback(
		(option: SortByOptionType) => {
			setSelectedOption(option);
			setIsOpened(false);
		},
		[setSelectedOption],
	);

	return (
		<div className={cn(styles.sort, className)} ref={sortByRef} {...props}>
			<button className={styles['sort-btn']} type="button" onClick={onToggleOpened} data-testid="sort-by-btn">
				<Icon className={styles['sort-btn__barsIcon']} icon={barsIcon} width={20} height={20} />
				По {selectedOption.label}
				<Icon
					className={cn(styles['sort-btn__arrowIcon'], {
						[styles['sort-btn__arrowIcon--rotated']]: isOpened,
					})}
					icon={arrowBottomIcon}
					width={16}
					height={20}
					data-testid="sort-by-arrow"
				/>
			</button>

			<div
				className={cn(styles['sort-menu'], {
					[styles['sort-menu--opened']]: isOpened,
				})}
				data-testid="sort-by-menu"
			>
				<div className={styles['sort-menu__header']}>Сортировать по:</div>
				<ul>
					{options.map((option) => (
						<li
							key={option.value}
							className={cn(styles['sort-menu__item'], {
								[styles['sort-menu__item--active']]: option.value === selectedOption.value,
							})}
							data-testid="sort-by-item"
						>
							<button
								type="submit"
								className={styles['sort-menu__item-btn']}
								onClick={() => onSelectedOption(option)}
							>
								{capitalize(option.label)}
							</button>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};
