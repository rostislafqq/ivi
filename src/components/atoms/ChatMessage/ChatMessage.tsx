import cn from 'classnames';
import React from 'react';

import { Heading, Text } from '../typography';

import type { ChatMessageProps } from './ChatMessage.types';

import styles from './ChatMessage.module.scss';

export const ChatMessage: React.FC<ChatMessageProps> = ({ className, type = 'left', title, extra }) => {
	const messageClasses = cn(styles.message, className, {
		[styles.message__right]: type === 'right',
		[styles.message__left]: type === 'left',
	});
	return (
		<div data-testid="chat-message" className={messageClasses}>
			{title ? <Heading tag="h4">{title}</Heading> : null}
			{extra ? (
				<Text className={styles.message__extra} tag="span">
					{extra}
				</Text>
			) : null}
		</div>
	);
};
