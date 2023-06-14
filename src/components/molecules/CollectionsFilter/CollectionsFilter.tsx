import cn from 'classnames';
import { useRouter } from 'next/router';
import React, { useCallback, useState, useEffect } from 'react';

import { COUNTRIES_SELECT_OPTIONS } from '@/app/data/countriesSelectOptions';
import { GENRES_SELECT_OPTIONS } from '@/app/data/genresSelectOptions';

import { getFormattedNumber } from '@/app/utils';
import { Icon, InputRange } from '@/components/atoms';
import checkIcon from '@assets/icons/check.svg';
import funnelIcon from '@assets/icons/funnel.svg';
import closeIcon from '@assets/icons/x-mark.svg';

import { DropdownMenu } from '../DropdownMenu/DropdownMenu';

import { Select } from '../Select/Select';

import type { CollectionsFilterProps } from './CollectionsFilter.types';
import type { SelectOptionType } from '@/app/types';

import styles from './CollectionsFilter.module.scss';

export const CollectionsFilter: React.FC<CollectionsFilterProps> = ({ className, state, dispatch, ...props }) => {
	const [isOpened, setIsOpened] = useState(false);

	const router = useRouter();

	const isActiveSelectOption = useCallback(
		(selectedOptions: SelectOptionType[], currentOption: SelectOptionType) =>
			selectedOptions.map((option) => option.value).includes(currentOption.value),
		[],
	);

	useEffect(() => {
		const handleChangeRouter = async (url: string) => {
			await router.push(url);
		};

		const newUrl = new URL(window.location.href);
		newUrl.searchParams.delete('genre');
		newUrl.searchParams.delete('country');
		newUrl.searchParams.delete('rating');
		newUrl.searchParams.delete('stars');

		if (state.genres.length) {
			state.genres.forEach((genre) => {
				newUrl.searchParams.append('genre', genre.value);
			});
		}

		if (state.countries.length) {
			state.countries.forEach((country) => {
				newUrl.searchParams.append('country', country.value);
			});
		}

		if (state.rating > 1) {
			newUrl.searchParams.set('rating', String(state.rating));
		}

		if (state.stars > 10000) {
			newUrl.searchParams.set('stars', String(state.stars));
		}

		// eslint-disable-next-line @typescript-eslint/no-floating-promises
		handleChangeRouter(newUrl.href);

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [state]);

	return (
		<DropdownMenu
			isOpened={isOpened}
			setIsOpened={setIsOpened}
			button={
				<button
					className={styles['filters-btn']}
					type="button"
					onClick={() => setIsOpened((prevState) => !prevState)}
				>
					<Icon className={styles['filters-btn__funnelIcon']} icon={funnelIcon} width={16} height={20} />
					{!isOpened ? 'Фильтры' : 'Свернуть'}
				</button>
			}
			menuClassName={styles['filters-menu']}
			{...props}
		>
			<div className={styles['filters-menu__item']}>
				<Select
					label="Жанры"
					selectedOptions={state.genres}
					menuClassName={styles['filtersSelect-menu']}
					buttonClassName={styles['filtersSelect-btn']}
				>
					<div className={styles['filtersSelect-menu__header']}>Выберите один или несколько вариантов:</div>
					<ul className={styles['filtersSelect-menu__options']}>
						{GENRES_SELECT_OPTIONS.map((option) => (
							<li className={styles['filtersSelect-menu__item']} key={option.value}>
								<button
									className={cn(styles['filtersSelect-menu__itemBtn'], {
										[styles['filtersSelect-menu__itemBtn--active']]: isActiveSelectOption(
											state.genres,
											option,
										),
									})}
									type="button"
									onClick={() => dispatch({ type: 'ADD_GENRE', payload: { value: option } })}
								>
									{option.label}
									{isActiveSelectOption(state.genres, option) && (
										<Icon
											className={styles['filtersSelect-menu__arrowIcon']}
											icon={checkIcon}
											width={16}
											height={16}
										/>
									)}
								</button>
							</li>
						))}
					</ul>
				</Select>
			</div>
			<div className={styles['filters-menu__item']}>
				<Select
					label="Страны"
					selectedOptions={state.countries}
					menuClassName={styles['filtersSelect-menu']}
					buttonClassName={styles['filtersSelect-btn']}
				>
					<div className={styles['filtersSelect-menu__header']}>Выберите один или несколько вариантов:</div>
					<ul className={styles['filtersSelect-menu__options']}>
						{COUNTRIES_SELECT_OPTIONS.map((option) => (
							<li className={styles['filtersSelect-menu__item']} key={option.value}>
								<button
									className={cn(styles['filtersSelect-menu__itemBtn'], {
										[styles['filtersSelect-menu__itemBtn--active']]: isActiveSelectOption(
											state.countries,
											option,
										),
									})}
									type="button"
									onClick={() => dispatch({ type: 'ADD_COUNTRY', payload: { value: option } })}
								>
									{option.label}
									{isActiveSelectOption(state.countries, option) && (
										<Icon
											className={styles['filtersSelect-menu__arrowIcon']}
											icon={checkIcon}
											width={16}
											height={16}
										/>
									)}
								</button>
							</li>
						))}
					</ul>
				</Select>
			</div>
			<div className={styles['filters-menu__item']}>
				<Select
					label="Рейтинг"
					selectedLabel={`Больше ${state.rating}`}
					menuClassName={styles['filtersSelect-menu']}
					buttonClassName={styles['filtersSelect-btn']}
				>
					<div className={styles['filtersSelect-menu__header']}>Переместите ползунок влево или вправо:</div>
					<InputRange
						className={styles['filtersSelect-menu__range']}
						value={state.rating}
						onChange={(e) =>
							dispatch({ type: 'CHANGE_RATING', payload: { value: Number(e.target.value) } })
						}
						step={0.1}
						minValue={1}
						maxValue={10}
					/>
				</Select>
			</div>
			<div className={styles['filters-menu__item']}>
				<Select
					label="Количество звёзд"
					selectedLabel={`Свыше ${getFormattedNumber(state.stars)} звёзд`}
					menuClassName={styles['filtersSelect-menu']}
					buttonClassName={styles['filtersSelect-btn']}
				>
					<div className={styles['filtersSelect-menu__header']}>Переместите ползунок влево или вправо:</div>
					<InputRange
						className={styles['filtersSelect-menu__range']}
						value={state.stars}
						onChange={(e) => dispatch({ type: 'CHANGE_STARS', payload: { value: Number(e.target.value) } })}
						step={10_000}
						minValue={10_000}
						maxValue={1_000_001}
					/>
				</Select>
			</div>
			<div className={styles['filters-menu__footer']}>
				<button
					className={styles['filters-menu__resetBtn']}
					type="button"
					onClick={() => dispatch({ type: 'RESET_STATE' })}
				>
					<Icon icon={closeIcon} width={20} height={20} />
					Сбросить фильтры
				</button>
			</div>
		</DropdownMenu>
	);
};
