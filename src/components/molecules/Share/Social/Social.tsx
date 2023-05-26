/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from 'react';

import { Icon, IconButton, ListItem } from '@/components/atoms';

import linked from '@assets/icons/social/linkedin.svg';

import ok from '@assets/icons/social/okLogo.svg';
import tg from '@assets/icons/social/tg.svg';
import twit from '@assets/icons/social/twitter.svg';
import viber from '@assets/icons/social/viber.svg';

import vk from '@assets/icons/social/vk.svg';

import { List } from '../../List/List';

import styles from './Social.module.scss';
import { SocialProps } from './Social.type';

export const Social: React.FC<SocialProps> = ({ isDefault = true, items = [] }) =>
	isDefault ? (
		<List className={styles.social} tag="ul">
			<ListItem>
				<IconButton
					className={styles.social__btn}
					href="https://vk.com/iviru?crc=fa4448c13e06e69ba9e814e8743c7e2e"
					variant="secondary"
					size="normal"
				>
					<Icon width={16} icon={vk} />
				</IconButton>
			</ListItem>
			<ListItem>
				<IconButton
					className={styles.social__btn}
					href="https://ok.ru/ivi.ru"
					variant="secondary"
					size="normal"
				>
					<Icon width={16} icon={ok} />
				</IconButton>
			</ListItem>
			<ListItem>
				<IconButton
					className={styles.social__btn}
					href="https://twitter.com/ivi_ru"
					variant="secondary"
					size="normal"
				>
					<Icon width={16} icon={twit} />
				</IconButton>
			</ListItem>
			<ListItem>
				<IconButton
					className={styles.social__btn}
					href="https://vb.me/a0544c"
					variant="secondary"
					size="normal"
				>
					<Icon width={16} icon={viber} />
				</IconButton>
			</ListItem>
			<ListItem>
				<IconButton
					className={styles.social__btn}
					href="https://www.linkedin.com/company/2543415/"
					variant="secondary"
					size="normal"
				>
					<Icon width={16} icon={linked} />
				</IconButton>
			</ListItem>
			<ListItem>
				<IconButton
					className={styles.social__btn}
					href="https://t.me/official_iviru"
					variant="secondary"
					size="normal"
				>
					<Icon width={16} icon={tg} />
				</IconButton>
			</ListItem>
		</List>
	) : (
		<List className={styles.social} tag="ul">
			{items.map((val) => (
				<ListItem key={val.key}>
					<IconButton
						className={styles.social__btn}
						href="https://vk.com/iviru?crc=fa4448c13e06e69ba9e814e8743c7e2e"
						variant="secondary"
						size="normal"
					>
						<Icon width={val.width} icon={val.icon} />
					</IconButton>
				</ListItem>
			))}
		</List>
	);
