import React, { useState } from 'react';

import { translation } from '@/../public/locales/translation';
import { useAppSelector } from '@/app/hooks';
import { selectLanguage } from '@/app/store/language/languageSlice';

import { Button, ChatMessage, Input, InputGroup, Label } from '@/components/atoms';

import styles from './Login.module.scss';
import { LoginProps } from './Login.types';

export const Login: React.FC<LoginProps> = ({ loginHandle }) => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const { language } = useAppSelector(selectLanguage);
	return (
		<div className={`${styles.login} container`}>
			<div className={styles.login__authContainer}>
				<ChatMessage
					extra={translation[language].auth.extra}
					title={translation[language].auth.go}
					type="left"
				/>
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
							{translation[language].auth.email}
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
							{translation[language].auth.password}
						</Label>
					</InputGroup>
					<div className={styles.login__btnContainer}>
						<Button
							onClick={() => {
								loginHandle(email, password);
							}}
							className={styles.login__open}
							size="small"
							variant="primary"
						>
							{translation[language].auth.enter}
						</Button>
						<Button href="auth/regestration" size="small" variant="secondary">
							{translation[language].auth.reg}
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
};
