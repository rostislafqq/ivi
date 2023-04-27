import React from 'react';

import { ButtonTypeType, ButtonVariantType } from '../buttons.types';

export interface IconButtonProps {
	children: React.ReactNode;
	type?: ButtonTypeType;
	href?: string;
	size?: 'normal' | 'big';
	variant?: ButtonVariantType;
	className?: string;
	onClick?: (event: React.MouseEvent) => void;
}
