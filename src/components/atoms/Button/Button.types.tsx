import { ButtonHTMLAttributes } from 'react';

type ButtonElementType = ButtonHTMLAttributes<HTMLButtonElement>;
export interface ButtonProps extends ButtonElementType {
	size: 'small' | 'normal' | 'full';
	type: 'button' | 'submit' | 'reset';
	variant?: 'primary' | 'primary-gradient' | 'secondary';
	className?: string;
}
