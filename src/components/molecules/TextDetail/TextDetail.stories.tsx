import React from 'react';

import { TextDetail } from './TextDetail';

import styles from './TextDetail.module.scss';

import { List } from '../List/List';

import { defaultContentItems } from '@/app/data/defaultContentItems';
import { Button, Heading, ListItem } from '@/components/atoms';
import { Text } from '@/components/atoms/Text/Text';

import type { Meta, StoryObj } from '@storybook/react';

import '@/config/globals.scss';

const meta: Meta<typeof TextDetail> = {
	title: 'Molecules/TextDetail',
	component: TextDetail,
	tags: ['autodocs'],
	argTypes: {
		showContent: {
			description: 'контент , который будет открываться/закрываться',
		},
		staticContent: {
			description: 'неактивный заголовок',
		},
		length: {
			description: 'кол-во строк которые будут видны при скрытом состоянии',
		},
		buttonValues: {
			description: 'формат ввода значений: [при закрытии,при открытии]',
		},
		className: {
			description: 'класс для всей секции . например : width:75%',
		},
	},
};
export default meta;

type Story = StoryObj<typeof TextDetail>;

export const HomeExample: Story = {
	args: {
		staticContent: [
			<Heading tag="h3">
				Онлайн-кинотеатр Иви: фильмы в хорошем качестве всегда приносят настоящее удовольствие
			</Heading>,
		],
		showContent: [
			<>
				<Text className={styles['paragrapg--position']} tag="p">
					Случалось ли вам отказаться от просмотра интересного фильма из-за того, что его показывали в
					неудобное время? Приходилось ли искать в сети интернет, где смотреть фильмы онлайн? А спорить с
					домашними из-за выбора кино для просмотра по ТВ?
				</Text>
				<Text className={styles['paragrapg--position']} tag="p">
					Все эти проблемы остались в прошлом! Откройте для себя фильмы онлайн в HD-качестве с кинотеатром
					Иви. Мы не просто освобождаем вас от необходимости идти в кинотеатр или изучать программу
					телепередач – у посетителей нашего ресурса гораздо больше возможностей.
				</Text>
				<Text className={styles['paragrapg--position']} tag="p">
					Онлайн-кинотеатр ivi.ru – это:
				</Text>
				<List tag="ol">
					{defaultContentItems.map((v) => (
						<ListItem className={styles['list--position']} type="circle" key={v}>
							{v}
						</ListItem>
					))}
				</List>
			</>,
		],
		length: 2,
		buttonValues: ['развернуть', 'свернуть'],
	},
};
