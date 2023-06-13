import React, { useState } from 'react';

import { Button, Heading, Input, InputGroup, Label, Text } from '@/components/atoms';

import styles from './AdminAddFilm.module.scss';
import { AdminAddFilmProps } from './AdminAddFilm.type';

export const AdminAddFilm: React.FC<AdminAddFilmProps> = ({
	allGengres,
	allCountries,
	allRoles,
	allBadges,
	addNewFilm,
}) => {
	const [nameRu, setNameRu] = useState('');
	const [logoUrl, setLogoUrl] = useState('');
	const [filmLength, setFilmLength] = useState('');
	const [rating, setRating] = useState('');
	const [year, setYear] = useState('');
	const [description, setDescription] = useState('');
	const [ratingAgeLimits, setRatingAgeLimits] = useState('');
	const [status, setStatus] = useState('subscribe');
	const [choseGengre, setChoseGengre] = useState(2);
	const [choseCountry, setChoseCountry] = useState(2);
	const [role, setChoseRole] = useState(1);
	const [personId, setPersonId] = useState<string | number>('');
	const [general, setGeneral] = useState(false);
	const [type, setType] = useState('FILM');
	const [badge, setBadge] = useState(1);

	return (
		<>
			<Heading tag="h2">Создай новую карточку фильма</Heading>
			<div className={styles.admin__createContainer}>
				<InputGroup>
					<Input
						className={styles.admin__input}
						onChange={(el) => {
							setNameRu(el.target.value);
						}}
						type="text"
						value={nameRu}
					/>
					<Label className={styles.admin__label} isActive={!nameRu}>
						название фильма
					</Label>
				</InputGroup>
				<InputGroup>
					<Input
						className={styles.admin__input}
						onChange={(el) => {
							setLogoUrl(el.target.value);
						}}
						type="text"
						value={logoUrl}
					/>
					<Label className={styles.admin__label} isActive={!logoUrl}>
						url картинки
					</Label>
				</InputGroup>
				<InputGroup>
					<Input
						className={styles.admin__input}
						onChange={(el) => {
							setFilmLength(el.target.value);
						}}
						type="text"
						value={filmLength}
					/>
					<Label className={styles.admin__label} isActive={!filmLength}>
						продолжительность фильма
					</Label>
				</InputGroup>
				<InputGroup>
					<Input
						className={styles.admin__input}
						onChange={(el) => {
							setRating(el.target.value);
						}}
						type="text"
						value={rating}
					/>
					<Label className={styles.admin__label} isActive={!rating}>
						рейтинг фильма
					</Label>
				</InputGroup>
				<InputGroup>
					<Input
						className={styles.admin__input}
						onChange={(el) => {
							setYear(el.target.value);
						}}
						type="text"
						value={year}
					/>
					<Label className={styles.admin__label} isActive={!year}>
						год создания
					</Label>
				</InputGroup>
				<InputGroup>
					<Input
						className={styles.admin__input}
						onChange={(el) => {
							setDescription(el.target.value);
						}}
						type="text"
						value={description}
					/>
					<Label className={styles.admin__label} isActive={!description}>
						описание
					</Label>
				</InputGroup>
				<InputGroup>
					<Input
						className={styles.admin__input}
						onChange={(el) => {
							setRatingAgeLimits(el.target.value);
						}}
						type="text"
						value={ratingAgeLimits}
					/>
					<Label className={styles.admin__label} isActive={!ratingAgeLimits}>
						возрастное ограничение
					</Label>
				</InputGroup>
				<div className={styles.admin__selectContainer}>
					<Text tag="p">тип</Text>
					<select
						onChange={(e) => {
							setType(e.target.value);
						}}
					>
						<option value="FILM">Фильм</option>
						<option value="TV_SERIES">Сериал</option>
					</select>
				</div>
				<div className={styles.admin__selectContainer}>
					<Text tag="p">статус фильма</Text>
					<select
						onChange={(e) => {
							setStatus(e.target.value);
						}}
					>
						<option value="subscribe">Подписка</option>
						<option value="buy">Покупка</option>
						<option value="free">Бесплатно</option>
					</select>
				</div>
				<div className={styles.admin__selectContainer}>
					<Text tag="p">выберите жанр</Text>
					<select
						onChange={(e) => {
							setChoseGengre(parseInt(e.target.value, 10));
						}}
					>
						{allGengres &&
							allGengres.map((val) => (
								<option key={val.id} value={val.id}>
									{val.genre}
								</option>
							))}
					</select>
				</div>
				<div className={styles.admin__selectContainer}>
					<Text tag="p">выберите страну</Text>
					<select
						onChange={(e) => {
							setChoseCountry(parseInt(e.target.value, 10));
						}}
					>
						{allCountries &&
							allCountries.map((val) => (
								<option key={val.id} value={val.id}>
									{val.nameRu}
								</option>
							))}
					</select>
				</div>
				<div className={styles.admin__selectContainer}>
					<Text tag="p">выберите бейдж фильма</Text>
					<select
						onChange={(e) => {
							setBadge(parseInt(e.target.value, 10));
						}}
					>
						{allBadges &&
							allBadges.map((val) => (
								<option key={val.id} value={val.id}>
									{val.type}
								</option>
							))}
					</select>
				</div>
				<div className={styles.admin__selectContainer}>
					<Text tag="span">роль участника </Text>
					<select
						onChange={(e) => {
							setChoseRole(parseInt(e.target.value, 10));
						}}
					>
						{allRoles &&
							allRoles.map((val) => (
								<option key={val.name} value={val.id}>
									{val.name}
								</option>
							))}
					</select>
					<InputGroup>
						<Input
							className={styles.admin__input}
							onChange={(el) => {
								setPersonId(parseInt(el.target.value, 10));
							}}
							type="text"
							value={personId}
						/>
						<Label className={styles.admin__label} isActive={!personId}>
							id участника
						</Label>
					</InputGroup>
					<div className={styles.admin__checxboxCont}>
						<Text tag="span">главная роль</Text>
						<input checked={general} onChange={(e) => setGeneral(e.target.checked)} type="checkbox" />
					</div>
				</div>
				<Button
					onClick={() => {
						addNewFilm({
							nameOriginal: 'nameRu',
							nameRu,
							coverUrl: logoUrl,
							logoUrl,
							filmLength: parseInt(filmLength, 10),
							rating: parseInt(rating, 10),
							year: parseInt(year, 10),
							ratingCount: 0,
							description,
							ratingAgeLimits,
							type,
							status,
							countries: [{ id: choseCountry }],
							genres: [{ id: choseGengre }],
							personsfilm: [{ personId, general, role }],
							badge,
						});
					}}
					className={styles.admin__addBtn}
					size="normal"
					variant="primary"
				>
					добавить
				</Button>
			</div>
		</>
	);
};
