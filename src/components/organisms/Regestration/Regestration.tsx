import React, { useState } from 'react';

import { translation } from '@/../public/locales/translation';

import { useAppSelector } from '@/app/hooks';

import { selectLanguage } from '@/app/store/language/languageSlice';

import { Button, Heading, Input, InputGroup, Label } from '@/components/atoms';

import styles from './Regestration.module.scss';
import { RegestrationProps } from './Regestration.type';

export const Regestration: React.FC<RegestrationProps> = ({ loginHandle }) => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const { language } = useAppSelector(selectLanguage);
	return (
		<div className={`container ${styles.regestration}`}>
			<Heading tag="h2">{translation[language].auth.heading}</Heading>
			<InputGroup>
				<Input
					className={styles.regestration__input}
					onChange={(el) => {
						setFirstName(el.target.value);
					}}
					type="text"
					value={firstName}
				/>
				<Label className={styles.regestration__label} isActive={!firstName}>
					{translation[language].auth.name}
				</Label>
			</InputGroup>
			<InputGroup>
				<Input
					className={styles.regestration__input}
					onChange={(el) => {
						setLastName(el.target.value);
					}}
					type="text"
					value={lastName}
				/>
				<Label className={styles.regestration__label} isActive={!lastName}>
					{translation[language].auth.surname}
				</Label>
			</InputGroup>
			<InputGroup>
				<Input
					className={styles.regestration__input}
					onChange={(el) => {
						setEmail(el.target.value);
					}}
					type="email"
					value={email}
				/>
				<Label className={styles.regestration__label} isActive={!email}>
					{translation[language].auth.email}
				</Label>
			</InputGroup>
			<InputGroup>
				<Input
					className={styles.regestration__input}
					onChange={(el) => {
						setPassword(el.target.value);
					}}
					type="password"
					value={password}
				/>
				<Label className={styles.regestration__label} isActive={!password}>
					{translation[language].auth.password}
				</Label>
			</InputGroup>
			<Button
				onClick={() => {
					loginHandle(email, password, firstName, lastName);
				}}
				className={styles.regestration__btn}
				variant="primary"
				size="small"
			>
				{translation[language].auth.heading}
			</Button>
		</div>
	);
};
