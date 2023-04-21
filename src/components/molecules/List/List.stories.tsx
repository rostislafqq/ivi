import React from 'react';

import { List } from './List';

import styles from './List.module.scss';

import { ListItem } from '../../atoms/ListItem/ListItem';

import type { Meta, StoryObj } from '@storybook/react';

import '@/config/globals.scss';

const meta: Meta<typeof List> = {
	title: 'Molecules/List',
	component: List,
	tags: ['autodocs'],

	argTypes: {
		children: {
			description: 'может принимать не только текст',
		},
	},
};
export default meta;

type Story = StoryObj<typeof List>;

export const DefaultList: Story = {
	render: (args) => (
		<List tag={args.tag}>
			<ListItem type="circle" className={styles.position1216}>
				уникальная рекомендательная система, учитывающая ваши предпочтения и предлагающая посмотреть именно то,
				что точно придется вам по душе;
			</ListItem>
			<ListItem type="circle" className={styles.position1216}>
				просмотр в одно касание на любом из устройств, подключенном к вашему Иви-аккаунту – от смартфонов до
				телевизоров с технологией Smart TV;
			</ListItem>
			<ListItem type="circle" className={styles.position1216}>
				возможность скачивать в память мобильного устройства лицензионный контент и смотреть его без доступа к
				Интернету;
			</ListItem>
			<ListItem type="circle" className={styles.position1216}>
				уникальные условия и преимущества для обладателей подписки Иви, делающей кинопросмотр комфортным и
				приятным;
			</ListItem>
			<ListItem type="circle" className={styles.position1216}>
				удобная и продвинутая система уведомлений, вы не пропустите выход крутого обсуждаемого блокбастера – мы
				известим о появлении подходящим для вас способом;
			</ListItem>
			<ListItem type="circle" className={styles.position1216}>
				возможность добавлять фильмы в «смотреть позже», чтобы вернуться к ним в свободное время;
			</ListItem>
			<ListItem type="circle" className={styles.position1216}>
				контент, для просмотра которого не требуется устанавливать видеоплееры или искать кодеки;
			</ListItem>
			<ListItem type="circle" className={styles.position1216}>
				просмотр онлайн контента хорошего разрешения без регистрации и смс.
			</ListItem>
		</List>
	),
	args: {
		tag: 'ol',
	},
};
