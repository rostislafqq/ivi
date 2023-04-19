import * as React from 'react';
import classNames from 'classnames';
import styles from './Menu.module.scss';
import { MenuProps } from './Menu.types.ts';

export const Menu: React.FC<MenuProps> = ({ children, isHorizontal = true }) => {
	const classes = classNames(styles.list, { [styles['column']]: !isHorizontal });

	return <ul className={classes}>{children}</ul>;
};
