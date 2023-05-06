/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from 'react';

import styles from './Download.module.scss';

import { DownloadProps } from './Download.types';

import { List } from '../../List/List';

import apple from '@/assets/icons/apple.svg';
import { Button, Icon, ListItem, Text } from '@/components/atoms';
import allDevices from '@assets/icons/allDevices.svg';
import googlePlay from '@assets/icons/googlePlay.svg';
import monitor from '@assets/icons/monitor.svg';

export const Download: React.FC<DownloadProps> = ({ isDefault = true, contentData = [] }) =>
	isDefault ? (
		<List className={styles.download} tag="ul">
			<ListItem>
				<Button
					className={styles.download__btn}
					size="small"
					variant="secondary"
					href="https://go.onelink.me/app/devicesiOS"
					icon={<Icon width={20} icon={apple} />}
				>
					<div>
						<Text className={styles.download__text} tag="p">
							Загрузить в
						</Text>
						<Text className={styles[`download__text-bold`]} tag="p">
							App Store
						</Text>
					</div>
				</Button>
			</ListItem>
			<ListItem>
				<Button
					className={styles.download__btn}
					size="small"
					variant="secondary"
					href="https://go.onelink.me/app/devicesAndroid"
					icon={<Icon width={20} icon={googlePlay} />}
				>
					<div>
						<Text className={styles.download__text} tag="p">
							Доступно в
						</Text>
						<Text className={styles[`download__text-bold`]} tag="p">
							GooglePlay
						</Text>
					</div>
				</Button>
			</ListItem>
			<ListItem>
				<Button
					className={styles.download__btn}
					size="small"
					variant="secondary"
					href="/pages/tvsmart"
					icon={<Icon width={20} icon={monitor} />}
				>
					<div>
						<Text className={styles.download__text} tag="p">
							Смотрите на{' '}
						</Text>
						<Text className={styles[`download__text-bold`]} tag="p">
							Smart TV
						</Text>
					</div>
				</Button>
			</ListItem>
			<ListItem>
				<Button
					className={styles.download__btn}
					size="small"
					variant="secondary"
					href="/devices"
					icon={<Icon width={20} icon={allDevices} />}
				>
					<div>
						<Text className={styles[`download__text-bold`]} tag="p">
							Все устройства
						</Text>
					</div>
				</Button>
			</ListItem>
		</List>
	) : (
		<List className={styles.download} tag="ul">
			{contentData.map((val) => (
				<ListItem key={val.icon.content}>
					<Button
						className={styles.download__btn}
						size="small"
						variant="secondary"
						href={val.href}
						icon={<Icon width={val.width} icon={val.icon} />}
					>
						<div>
							<Text className={styles.download__text} tag="p">
								{val.smallText}
							</Text>
							<Text className={styles[`download__text-bold`]} tag="p">
								{val.boldText}
							</Text>
						</div>
					</Button>
				</ListItem>
			))}
		</List>
	);
