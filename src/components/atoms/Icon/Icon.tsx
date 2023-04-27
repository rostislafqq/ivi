import * as React from 'react';

import styles from './icon.module.scss';
import { IconProps } from './Icon.types';

export const Icon: React.FC<IconProps> = ({ icon, width, height = '100%' }) => (
	<svg viewBox={icon.viewBox} width={width} height={height} className={styles.icon}>
		<use xlinkHref={`#${icon.id}`} />
	</svg>
);
