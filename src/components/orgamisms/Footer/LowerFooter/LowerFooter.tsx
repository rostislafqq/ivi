/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from 'react';

import styles from './LowerFooter.module.scss';

import { Text } from '@/components/atoms';
import { Download, Social } from '@/components/molecules';

export const LowerFooter = () => (
	<div className={styles.wrapper}>
		<div>
			<Download />
			<Text tag="p">
				© 2023 ООО «Иви.ру» HBO
				<br /> ® and related service marks are the property of Home Box Office, Inc
			</Text>
		</div>
		<Social />
	</div>
);
