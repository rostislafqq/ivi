/* eslint-disable no-nested-ternary */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import cn from 'classnames';
import Link from 'next/link';

import React, { useState } from 'react';

import { formatDate } from '@/app/utils/formatDate';

import like from '@/assets/icons/like.svg';

import { Icon, Text } from '@/components/atoms';

import type { ReviewProps } from './Review.types';

import styles from './Review.module.scss';

export const Review: React.FC<ReviewProps> = ({
	commentid = '',
	className = '',
	userName,
	likes,
	comment,
	type,
	date = '',
	onLike,
	onDislike,
	...props
}) => {
	const [isActive, setIsActive] = useState(false);

	const likeCollorClass = cn({
		[styles[`review__like--green`]]: likes > 0,
		[styles[`review__like--red`]]: likes < 0,
	});
	const formatedDate = formatDate(date);
	switch (type) {
		case 'row':
			return (
				<div className={`${styles[`review--row`]} ${className}`} {...props}>
					<div>
						<Text className={styles[`review--row__profileAvatar`]} tag="p">
							{userName[0]}
						</Text>
					</div>
					<div className={styles[`review--row__middleContainer`]}>
						<div className={styles[`review--row__middleContainer__first`]}>
							<Text className={styles[`review--row__middleContainer__userName`]} tag="p">
								{userName}
							</Text>
							<Text className={styles[`review--row__middleContainer__date`]} tag="p">
								{formatedDate}
							</Text>
						</div>
						<Text className={styles[`review--row__middleContainer__content`]} tag="p">
							{comment.length > 84 && isActive
								? comment
								: comment.length <= 84
								? comment
								: comment.slice(0, 84).concat('...')}
						</Text>
						{comment.length > 84 && (
							<button
								className={styles[`review--row__middleContainer__openBtn`]}
								onClick={() => {
									setIsActive(!isActive);
								}}
								type="button"
							>
								{isActive ? 'Развернуть' : 'Свернуть'}
							</button>
						)}
					</div>
					<div className={styles[`review--row__likeContainer`]}>
						<button
							onClick={() => {
								onLike();
							}}
							className={styles[`review--row__likeBtn`]}
							type="button"
						>
							<Icon icon={like} width={16} />
						</button>
						<Text className={`${styles[`review--row__likeCount`]} ${likeCollorClass}`} tag="span">
							{likes}
						</Text>
						<button
							onClick={() => {
								onDisike();
							}}
							className={styles[`review--row__likeBtn`]}
							type="button"
						>
							<Icon className={styles.review__dislike} icon={like} width={16} />
						</button>
					</div>
				</div>
			);
		case 'card':
			return (
				<Link className={`${styles[`review--block`]} ${className}`} href={`/${commentid}`} {...props}>
					<Text className={styles[`review--block__userName`]} tag="p">
						{userName}
					</Text>
					<Text className={styles[`review--block__content`]} tag="p">
						{comment}
					</Text>
					<div className={styles[`review--block__bottomContainer`]}>
						<Text className={styles[`review--block__bottomContainer__date`]} tag="span">
							{formatedDate}
						</Text>
						<div className={styles[`review--block__bottomContainer__likesContainer`]}>
							<button
								onClick={(e) => {
									e.preventDefault();
									onLike();
								}}
								className={styles[`review--block__bottomContainer__likeBTN`]}
								type="button"
							>
								<Icon
									className={styles[`review--block__bottomContainer__like`]}
									icon={like}
									width={16}
								/>
							</button>
							<Text
								className={`${styles[`review--block__bottomContainer__likeCount`]} ${likeCollorClass}`}
								tag="span"
							>
								{likes}
							</Text>
							<button
								onClick={(e) => {
									e.preventDefault();
									onDisike();
								}}
								className={styles[`review--block__bottomContainer__likeBTN`]}
								type="button"
							>
								<Icon className={styles.review__dislike} icon={like} width={16} />
							</button>
						</div>
					</div>
				</Link>
			);
		default:
			return null;
	}
};
