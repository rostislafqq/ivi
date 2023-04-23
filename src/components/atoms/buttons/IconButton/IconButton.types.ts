import { ButtonElementType, ButtonTypeType, ButtonVariantType } from '../buttons.types';

export interface IconButtonProps extends ButtonElementType {
	type: ButtonTypeType;
	size?: 'normal' | 'big';
	variant?: ButtonVariantType;
	className?: string;
}
