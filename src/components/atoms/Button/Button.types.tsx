import { ReactNode } from 'react';

export interface ButtonProps {
	size?: 'small' | 'medium' | 'large';
	children: ReactNode;
	border?: 'white' | 'static';
	backgroundSvg?: boolean;
	variant: 'lightBlack' | 'primary' | 'pay' | 'static';
	onClick?: () => void;
}
