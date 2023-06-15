import cn from 'classnames';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/router';
import React, { useEffect, useCallback, useState } from 'react';

import { SelectOptionType } from '@/app/types';
import { capitalize } from '@/app/utils';
import { Icon } from '@/components/atoms';

import arrowBottomIcon from '@assets/icons/arrow-bottom.svg';
import barsIcon from '@assets/icons/bars-3-bottom-right.svg';

import { DropdownMenu } from '../DropdownMenu/DropdownMenu';

import type { SortByProps } from './SortBy.types';

import styles from './SortBy.module.scss';

export const SortBy: React.FC<SortByProps> = ({ className, options, selectedOption, setSelectedOption, ...props }) => {
	const [isOpened, setIsOpened] = useState(false);
	const router = useRouter();
	const pathname = usePathname();

	const handleSelectedOption = useCallback(
		(option: SelectOptionType) => {
			setSelectedOption(option);
			setIsOpened(false);
		},
		[setSelectedOption],
	);

	useEffect(() => {
		const handleChangeRouter = async (url: string) => {
			await router.push(url);
		};

		// eslint-disable-next-line @typescript-eslint/no-floating-promises
		handleChangeRouter(`${pathname}/?sort=${selectedOption.value}`);

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [selectedOption]);

	return (
		<DropdownMenu
			className={className}
			isOpened={isOpened}
			setIsOpened={setIsOpened}
			button={
				<button
					className={styles['sort-btn']}
					type="button"
					onClick={() => setIsOpened((prevState) => !prevState)}
				>
					<Icon
						className={styles['sort-btn__barsIcon']}
						icon={barsIcon}
						width={20}
						height={20}
						data-testid="sort-by-barsIcon"
					/>
					По {selectedOption.label}
					<Icon
						className={styles['sort-btn__arrowIcon']}
						icon={arrowBottomIcon}
						width={16}
						height={20}
						data-testid="sort-by-arrowIcon"
					/>
				</button>
			}
			menuClassName={styles['sort-menu']}
			{...props}
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
							onClick={() => handleSelectedOption(option)}
						>
							{capitalize(option.label)}
						</button>
					</li>
				))}
			</ul>
		</DropdownMenu>
	);
};
