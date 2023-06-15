import React, { useState } from 'react';

import { Button, Heading, Input, InputGroup, Label } from '@/components/atoms';

import styles from './Regestration.module.scss';
import { RegestrationProps } from './Regestration.type';

export const Regestration: React.FC<RegestrationProps> = ({ loginHandle }) => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	return (
		<div className={`container ${styles.regestration}`}>
			<Heading tag="h2">Регистрация</Heading>
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
					Введите имя
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
					Введите фамилию
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
					Введите почту
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
					Введите пароль
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
				Регистрация
			</Button>
		</div>
	);
};
