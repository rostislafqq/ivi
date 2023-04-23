import { ReactNode } from 'react';

import { ButtonElementType, ButtonSizeType, ButtonTypeType, ButtonVariantType } from '../buttons.types';

export interface ButtonWithIconProps extends ButtonElementType {
	size: ButtonSizeType;
	type: ButtonTypeType;
	icon?: ReactNode;
	variant?: ButtonVariantType;
	className?: string;
}
