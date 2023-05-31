import React from 'react';

import { ButtonTypeType, ButtonSizeType, ButtonVariantType } from '../buttons.types';

export interface ButtonProps {
	children: React.ReactNode;
	type?: ButtonTypeType;
	href?: string;
	size?: ButtonSizeType;
	variant?: ButtonVariantType;
	icon?: React.ReactNode;
	endIcon?: React.ReactNode;
	className?: string;
	onClick?: (event: React.MouseEvent) => void;
}
