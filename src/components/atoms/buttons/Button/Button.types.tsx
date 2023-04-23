import { ButtonElementType, ButtonSizeType, ButtonTypeType, ButtonVariantType } from '../buttons.types';

export interface ButtonProps extends ButtonElementType {
	type: ButtonTypeType;
	size?: ButtonSizeType;
	variant?: ButtonVariantType;
	className?: string;
}
