/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from 'react';

import { Text } from '@/components/atoms';
import { Download, Social } from '@/components/molecules';

import styles from './LowerFooter.module.scss';

export const LowerFooter = () => (
	<div className={styles.footerContent}>
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