/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from 'react';

import styles from './LowerFooter.module.scss';

import apple from '@/assets/icons/apple.svg';

import { Button, Icon, IconButton, ListItem, Text } from '@/components/atoms';

import { List } from '@/components/molecules';

import allDevices from '@assets/icons/allDevices.svg';
import googlePlay from '@assets/icons/googlePlay.svg';
import linked from '@assets/icons/linkedin.svg';
import monitor from '@assets/icons/monitor.svg';
import ok from '@assets/icons/okLogo.svg';
import tg from '@assets/icons/tg.svg';
import twit from '@assets/icons/twitter.svg';
import viber from '@assets/icons/viber.svg';

import vk from '@assets/icons/vk.svg';

export const LowerFooter = () => (
	<div className={styles.wrapper}>
		<div>
			<List className={styles.wrapper__list} tag="ul">
				<ListItem>
					<Button
						className={styles.wrapper__listButton}
						size="small"
						variant="secondary"
						href="https://go.onelink.me/app/devicesiOS"
						icon={<Icon width={20} icon={apple} />}
					>
						<div>
							<Text className={styles.wrapper__listCommonText} tag="p">
								Загрузить в
							</Text>
							<Text className={styles.wrapper__listBoldText} tag="p">
								App Store
							</Text>
						</div>
					</Button>
				</ListItem>
				<ListItem>
					<Button
						className={styles.wrapper__listButton}
						size="small"
						variant="secondary"
						href="https://go.onelink.me/app/devicesiOS"
						icon={<Icon width={20} icon={googlePlay} />}
					>
						<div>
							<Text className={styles.wrapper__listCommonText} tag="p">
								Доступно в
							</Text>
							<Text className={styles.wrapper__listBoldText} tag="p">
								GooglePlay
							</Text>
						</div>
					</Button>
				</ListItem>
				<ListItem>
					<Button
						className={styles.wrapper__listButton}
						size="small"
						variant="secondary"
						href="https://go.onelink.me/app/devicesiOS"
						icon={<Icon width={20} icon={monitor} />}
					>
						<div>
							<Text className={styles.wrapper__listCommonText} tag="p">
								Смотрите на{' '}
							</Text>
							<Text className={styles.wrapper__listBoldText} tag="p">
								Smart TV
							</Text>
						</div>
					</Button>
				</ListItem>
				<ListItem>
					<Button
						className={styles.wrapper__listButton}
						size="small"
						variant="secondary"
						href="https://go.onelink.me/app/devicesiOS"
						icon={<Icon width={20} icon={allDevices} />}
					>
						<div>
							<Text className={styles.wrapper__listBoldText} tag="p">
								Все устройства
							</Text>
						</div>
					</Button>
				</ListItem>
			</List>
			<Text tag="p">
				© 2023 ООО «Иви.ру» HBO
				<br /> ® and related service marks are the property of Home Box Office, Inc
			</Text>
		</div>
		<List className={styles.wrapper__right} tag="ul">
			<ListItem>
				<IconButton
					className={styles.wrapper__rightsmallBtn}
					href="https://vk.com/iviru?crc=fa4448c13e06e69ba9e814e8743c7e2e"
					variant="secondary"
					size="normal"
				>
					<Icon width={16} icon={vk} />
				</IconButton>
			</ListItem>
			<ListItem>
				<IconButton
					className={styles.wrapper__rightsmallBtn}
					href="https://vk.com/iviru?crc=fa4448c13e06e69ba9e814e8743c7e2e"
					variant="secondary"
					size="normal"
				>
					<Icon width={16} icon={ok} />
				</IconButton>
			</ListItem>
			<ListItem>
				<IconButton
					className={styles.wrapper__rightsmallBtn}
					href="https://vk.com/iviru?crc=fa4448c13e06e69ba9e814e8743c7e2e"
					variant="secondary"
					size="normal"
				>
					<Icon width={16} icon={twit} />
				</IconButton>
			</ListItem>
			<ListItem>
				<IconButton
					className={styles.wrapper__rightsmallBtn}
					href="https://vk.com/iviru?crc=fa4448c13e06e69ba9e814e8743c7e2e"
					variant="secondary"
					size="normal"
				>
					<Icon width={16} icon={viber} />
				</IconButton>
			</ListItem>
			<ListItem>
				<IconButton
					className={styles.wrapper__rightsmallBtn}
					href="https://vk.com/iviru?crc=fa4448c13e06e69ba9e814e8743c7e2e"
					variant="secondary"
					size="normal"
				>
					<Icon width={16} icon={linked} />
				</IconButton>
			</ListItem>
			<ListItem>
				<IconButton
					className={styles.wrapper__rightsmallBtn}
					href="https://vk.com/iviru?crc=fa4448c13e06e69ba9e814e8743c7e2e"
					variant="secondary"
					size="normal"
				>
					<Icon width={16} icon={tg} />
				</IconButton>
			</ListItem>
		</List>
	</div>
);
