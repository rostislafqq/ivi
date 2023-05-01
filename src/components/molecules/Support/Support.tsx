/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { useState } from 'react';

import styles from './Support.module.scss';

import email from '@/assets/icons/email.svg';
import tel from '@/assets/icons/telephone.svg';
import { Button, Heading, Icon, IconButton, Text, TextLink } from '@/components/atoms';

export const Support: React.FC = () => {
	const [isActive, setIsActive] = useState(false);
	return (
		<div className={styles.support}>
			<Heading className={styles.support__heading} tag="h4">
				Служба поддержки
			</Heading>
			<Text className={styles.support__intro} tag="p">
				Мы всегда готовы вам помочь.
				<br /> Наши операторы онлайн 24/7
			</Text>
			<Button
				className={styles.support__writeBtn}
				size="normal"
				variant="secondary"
				href="https://www.ivi.ru/profile"
			>
				Написать в чате
			</Button>
			<div className={styles.support__btnContainer}>
				<IconButton href="mailto:support@ivi.ru" size="normal" variant="secondary">
					<Icon width={16} icon={email} />
				</IconButton>
				<IconButton
					onClick={() => {
						setIsActive(!isActive);
					}}
					size="normal"
					variant="secondary"
				>
					<Icon width={16} icon={tel} />
				</IconButton>
				<Button
					className={
						isActive
							? `${styles.support__toggleBtn} ${styles[`support__toggleBtn--active`]}`
							: styles.support__toggleBtn
					}
					variant="secondary"
					size="normal"
					href="tel:+73832021280"
				>
					+7 383 202-12-80
				</Button>
			</div>
			<div className={styles.support__answer}>
				<TextLink
					className={styles.support__email}
					href="https://ask.ivi.ru/?_gl=1*msmcdw*_ga*MTc0ODk0NDM1Mi4xNjgxODk0NjM2*_ga_GETQ4387MJ*MTY4MjY2MTc2Mi4xNi4xLjE2ODI2ODE2NTYuNDAuMC4w"
					tag="span"
				>
					ask.ivi.ru
				</TextLink>
				<Text className={styles.support__answerContent} tag="span">
					Ответы на вопросы
				</Text>
			</div>
		</div>
	);
};
