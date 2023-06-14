import React, { useState } from 'react';

import { Button, ChatMessage, Input, InputGroup, Label } from '@/components/atoms';

import styles from './Login.module.scss';

export const Login = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	return (
		<div className={`${styles.login} container`}>
			<div className={styles.login__authContainer}>
				<ChatMessage extra="Или зарегестрируйтесь" title="Войдите" type="left" />
				<div className={styles.login__inputsContainer}>
					<InputGroup>
						<Input
							className={styles.login__input}
							onChange={(el) => {
								setEmail(el.target.value);
							}}
							type="email"
							value={email}
						/>
						<Label className={styles.login__label} isActive={!email}>
							Введите почту
						</Label>
					</InputGroup>
					<InputGroup>
						<Input
							className={styles.login__input}
							onChange={(el) => {
								setPassword(el.target.value);
							}}
							type="password"
							value={password}
						/>
						<Label className={styles.login__label} isActive={!password}>
							Введите пароль
						</Label>
					</InputGroup>
					<div className={styles.login__btnContainer}>
						<Button className={styles.login__open} size="small" variant="primary">
							Войти
						</Button>
						<Button size="small" variant="secondary">
							Зарегестрироваться
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
};
