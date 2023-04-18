import localFont from '@next/font/local';
import cn from 'classnames';
import React from 'react';

import styles from './layout.module.scss';

const iviFont = localFont({
	src: [
		{
			path: '../../../assets/fonts/iviSans-Black.woff2',
			weight: '900',
			style: 'normal',
		},
		{
			path: '../../../assets/fonts/iviSans-Bold.woff2',
			weight: '700',
			style: 'normal',
		},
		{
			path: '../../../assets/fonts/iviSans-Medium.woff2',
			weight: '500',
			style: 'normal',
		},
		{
			path: '../../../assets/fonts/iviSans-Regular.woff2',
			weight: '400',
			style: 'normal',
		},
	],
	variable: '--ivi-font',
});

interface LayoutProps {
	children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => (
	<div className={cn(iviFont.className, styles.wrapper)}>{children}</div>
);

export default Layout;
