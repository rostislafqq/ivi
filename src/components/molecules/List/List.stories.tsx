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

export const defaultContentItems = [
	'уникальная рекомендательная система, учитывающая ваши предпочтения и предлагающая посмотреть именно то,что точно придется вам по душе;',
	'просмотр в одно касание на любом из устройств, подключенном к вашему Иви-аккаунту – от смартфонов дотелевизоров с технологией Smart TV;',
	'возможность скачивать в память мобильного устройства лицензионный контент и смотреть его без доступа кИнтернету;',
	'уникальные условия и преимущества для обладателей подписки Иви, делающей кинопросмотр комфортным иприятным;',
	'удобная и продвинутая система уведомлений, вы не пропустите выход крутого обсуждаемого блокбастера – мыизвестим о появлении подходящим для вас способом;',
	'возможность добавлять фильмы в «смотреть позже», чтобы вернуться к ним в свободное время;',
	'контент, для просмотра которого не требуется устанавливать видеоплееры или искать кодеки;',
	'просмотр онлайн контента хорошего разрешения без регистрации и смс.',
];

export const DefaultList: Story = {
	render: (args) => (
		<List tag={args.tag}>
			{contentItems.map((v, i) => (
				<ListItem type="circle" className={styles['example--position']}>
					{v}
				</ListItem>
			))}
		</List>
	),
	args: {
		tag: 'ol',
	},
};
