import * as React from 'react';
import styles from './MenuTitle.module.scss';
import { MenuTitleProps } from './MenuTitle.types.ts';

export const MenuTitle: React.FC<MenuTitleProps> = ({ text }) => {
	return <p className={styles.title}>{text}</p>;
};
