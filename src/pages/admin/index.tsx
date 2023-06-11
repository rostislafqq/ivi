/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-floating-promises */
import React, { useState, useEffect } from 'react';

import { Button, Heading, Input, InputGroup, Label, Text } from '@/components/atoms';

import { Layout } from '@/components/templates';

import styles from './admin.module.scss';
import { BadgeAdmin, Countries, Gengre, Roles } from './admin.types';

const Admin: React.FC = () => {
	const [nameRu, setNameRu] = useState('');
	const [logoUrl, setLogoUrl] = useState('');
	const [filmLength, setFilmLength] = useState('');
	const [rating, setRating] = useState('');
	const [year, setYear] = useState('');
	const [description, setDescription] = useState('');
	const [ratingAgeLimits, setRatingAgeLimits] = useState('');
	const [status, setStatus] = useState('subscribe');
	const [allGengres, setAllGengres] = useState<Gengre[]>([]);
	const [choseGengre, setChoseGengre] = useState(2);
	const [allCountries, setAllCountries] = useState<Countries[]>([]);
	const [choseCountry, setChoseCountry] = useState(2);
	const [allRoles, setAllRoles] = useState<Roles[]>([]);
	const [role, setChoseRole] = useState(1);
	const [personId, setPersonId] = useState('0');
	const [general, setGeneral] = useState(false);
	const [type, setType] = useState('FILM');
	const [badge, setBadge] = useState(1);
	const [allBadges, setAllBadges] = useState<BadgeAdmin[]>([]);
	useEffect(() => {
		const getGengres = async () => {
			const res = await fetch('http://localhost:4000/genre/getAll', {
				credentials: 'include',
				headers: {
					'Access-Control-Allow-Origin': 'http://localhost:4000',
				},
			});
			const data: Gengre[] = await res.json();
			setAllGengres(data);
		};
		const getCountries = async () => {
			const res = await fetch('http://localhost:4000/country/getAll', {
				credentials: 'include',
				headers: {
					'Access-Control-Allow-Origin': 'http://localhost:4000',
				},
			});
			const data: Countries[] = await res.json();
			setAllCountries(data);
		};
		const getRoles = async () => {
			const res = await fetch('http://localhost:4000/role', {
				credentials: 'include',
				headers: {
					'Access-Control-Allow-Origin': 'http://localhost:4000',
				},
			});
			const data: Roles[] = await res.json();
			setAllRoles(data);
		};
		const getBadges = async () => {
			const res = await fetch('http://localhost:4000/badge/getAll', {
				credentials: 'include',
				headers: {
					'Access-Control-Allow-Origin': 'http://localhost:4000',
				},
			});
			const data: BadgeAdmin[] = await res.json();
			setAllBadges(data);
		};
		getBadges();
		getRoles();
		getGengres();
		getCountries();
	}, []);

	const addNewFilm = async () => {
		const params = {
			nameRu,
			coverUrl: logoUrl,
			logoUrl,
			filmLength,
			rating,
			year,
			description,
			ratingAgeLimits,
			type,
			status,
			countries: [{ id: choseCountry }],
			genres: [{ id: choseGengre }],
			personsfilm: [{ personId, general, role }],
			badge,
		};
		console.log(params);
	};

	return (
		<Layout title="ivi админ-панель" description="Стриминговая платформа фильмов - Ivi">
			<div className={`${styles.admin} container`}>
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
								setChoseGengre(e.target.value);
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
								setChoseCountry(e.target.value);
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
								setBadge(e.target.value);
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
								setChoseRole(e.target.value);
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
									setPersonId(el.target.value);
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
							addNewFilm();
						}}
						className={styles.admin__addBtn}
						size="normal"
						variant="primary"
					>
						добавить
					</Button>
				</div>
			</div>
		</Layout>
	);
};

export default Admin;
