/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import React, { useState, useEffect } from 'react';

import { translation } from '@/../public/locales/translation';

import { Button, Heading, Input, InputGroup, Label, ListItem, Text } from '@/components/atoms';

import { List } from '@/components/molecules';

import styles from './AdminChangeFilm.module.scss';
import { AdminChangeFilmProps } from './AdminChangeFilm.types';

export const AdminChangeFilm: React.FC<AdminChangeFilmProps> = ({
	setChosenFilm,
	foundFilms,
	setSerchFilm,
	serchFilm,
	chosenFilmData,
	allGengres,
	allCountries,
	allRoles,
	allBadges,
	addNewFilm,
	deleteFilm,
	language = 'ru',
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

	useEffect(() => {
		if (chosenFilmData?.nameRu?.length > 0) {
			setNameRu(chosenFilmData.nameRu);
			setLogoUrl(chosenFilmData.logoUrl ?? '');
			setFilmLength(chosenFilmData.filmLength);
			setRating(chosenFilmData.rating.toString());
			setYear(chosenFilmData.year.toString());
			setDescription(chosenFilmData.description);
			setRatingAgeLimits(chosenFilmData.ratingAgeLimits?.toString() ?? '');
			setStatus(chosenFilmData.status);
			setChoseGengre(chosenFilmData.genres[0]?.id);
			setChoseCountry(chosenFilmData.countries[0]?.id);
			setChoseRole(parseInt(chosenFilmData.personsfilm[0]?.role?.key, 10));
			setPersonId(chosenFilmData.personsfilm[0]?.personId);
			setGeneral(chosenFilmData.personsfilm[0]?.general);
			setType(chosenFilmData.type);
			setBadge(chosenFilmData.badge?.id);
		}
	}, [chosenFilmData]);
	return (
		<div className={styles.change}>
			<Heading tag="h2">{translation[language].admin.headerAdd}</Heading>
			<div>
				<InputGroup>
					<Input
						className={styles.change__input}
						type="text"
						onChange={(el) => setSerchFilm(el.target.value)}
						value={serchFilm}
					/>
					<Label className={styles.change__label} isActive={!serchFilm}>
						{translation[language].admin.writeFilmName}
					</Label>
				</InputGroup>
				<List tag="ul">
					{foundFilms?.films?.length
						? foundFilms.films.slice(0, 5).map((val) => (
								<ListItem key={val.id} type="square">
									<Button
										onClick={() => {
											setChosenFilm(val.id);
											setSerchFilm(val.nameRu);
										}}
									>
										{val.nameRu}
									</Button>
								</ListItem>
						  ))
						: ''}
				</List>
				{chosenFilmData?.nameRu?.length > 0 ? (
					<>
						<InputGroup>
							<Input
								className={styles.change__input}
								onChange={(el) => {
									setNameRu(el.target.value);
								}}
								type="text"
								value={nameRu}
							/>
							<Label className={styles.change__label} isActive={!nameRu}>
								{translation[language].admin.filmName}
							</Label>
						</InputGroup>
						<InputGroup>
							<Input
								className={styles.change__input}
								onChange={(el) => {
									setLogoUrl(el.target.value);
								}}
								type="text"
								value={logoUrl === null ? '' : logoUrl}
							/>
							<Label className={styles.change__label} isActive={!logoUrl}>
								{translation[language].admin.urlImage}
							</Label>
						</InputGroup>
						<InputGroup>
							<Input
								className={styles.change__input}
								onChange={(el) => {
									setFilmLength(el.target.value);
								}}
								type="text"
								value={filmLength}
							/>
							<Label className={styles.change__label} isActive={!filmLength}>
								{translation[language].admin.movieDuration}
							</Label>
						</InputGroup>
						<InputGroup>
							<Input
								className={styles.change__input}
								onChange={(el) => {
									setRating(el.target.value);
								}}
								type="text"
								value={rating}
							/>
							<Label className={styles.change__label} isActive={!rating}>
								{translation[language].admin.rating}
							</Label>
						</InputGroup>
						<InputGroup>
							<Input
								className={styles.change__input}
								onChange={(el) => {
									setYear(el.target.value);
								}}
								type="text"
								value={year}
							/>
							<Label className={styles.change__label} isActive={!year}>
								{translation[language].admin.yearCreation}
							</Label>
						</InputGroup>
						<InputGroup>
							<Input
								className={styles.change__input}
								onChange={(el) => {
									setDescription(el.target.value);
								}}
								type="text"
								value={description}
							/>
							<Label className={styles.change__label} isActive={!description}>
								{translation[language].admin.description}
							</Label>
						</InputGroup>
						<InputGroup>
							<Input
								className={styles.change__input}
								onChange={(el) => {
									setRatingAgeLimits(el.target.value);
								}}
								type="text"
								value={ratingAgeLimits}
							/>
							<Label className={styles.change__label} isActive={!ratingAgeLimits}>
								{translation[language].admin.ageLimit}
							</Label>
						</InputGroup>
						<div className={styles.change__selectContainer}>
							<Text tag="p">{translation[language].admin.type}</Text>
							<select
								onChange={(e) => {
									setType(e.target.value);
								}}
							>
								<option value="FILM">{translation[language].admin.film}</option>
								<option value="TV_SERIES">{translation[language].admin.series}</option>
							</select>
						</div>
						<div className={styles.change__selectContainer}>
							<Text tag="p">{translation[language].admin.filmStatus}</Text>
							<select
								onChange={(e) => {
									setStatus(e.target.value);
								}}
							>
								<option value="subscribe">{translation[language].admin.subscribe}</option>
								<option value="buy">{translation[language].admin.buy}</option>
								<option value="free">{translation[language].admin.free}</option>
							</select>
						</div>
						<div className={styles.change__selectContainer}>
							<Text tag="p">{translation[language].admin.selectGenre}</Text>
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
						<div className={styles.change__selectContainer}>
							<Text tag="p">{translation[language].admin.selectCountry}</Text>
							<select
								onChange={(e) => {
									setChoseCountry(parseInt(e.target.value, 10));
								}}
							>
								{allCountries &&
									allCountries.map((val) => (
										<option key={val.id} value={val.id}>
											{language === 'ru' ? val.nameRu : val.name}
										</option>
									))}
							</select>
						</div>
						<div className={styles.change__selectContainer}>
							<Text tag="p">{translation[language].admin.selectBadge}</Text>
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
						<div className={styles.change__selectContainer}>
							<Text tag="span">{translation[language].admin.roleCreator}</Text>
							<select
								onChange={(e) => {
									setChoseRole(parseInt(e.target.value, 10));
								}}
							>
								{allRoles &&
									allRoles.map((val) => (
										<option key={val.name} value={val.id}>
											{language === 'ru' ? val.name : val.key.toLowerCase()}
										</option>
									))}
							</select>
							<InputGroup>
								<Input
									className={styles.change__input}
									onChange={(el) => {
										setPersonId(parseInt(el.target.value, 10));
									}}
									type="text"
									value={personId}
								/>
								<Label className={styles.change__label} isActive={!personId}>
									{translation[language].admin.idCreator}
								</Label>
							</InputGroup>
							<div className={styles.change__checxboxCont}>
								<Text tag="span">{translation[language].admin.mainRole}</Text>
								<input
									checked={general}
									onChange={(e) => setGeneral(e.target.checked)}
									type="checkbox"
								/>
							</div>
							<div className="">
								<Button
									onClick={() => {
										addNewFilm({
											nameOriginal: 'nameRu',
											nameRu,
											coverUrl: logoUrl ?? '',
											logoUrl: logoUrl ?? '',
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
									className={styles.change__addBtn}
									size="normal"
									variant="primary"
								>
									{translation[language].admin.change}
								</Button>
								<Button
									onClick={() => {
										if (chosenFilmData.id) {
											deleteFilm(chosenFilmData.id);
										}
									}}
									size="normal"
									variant="primary-gradient"
								>
									{translation[language].admin.delete}
								</Button>
							</div>
						</div>
					</>
				) : (
					''
				)}
			</div>
		</div>
	);
};
