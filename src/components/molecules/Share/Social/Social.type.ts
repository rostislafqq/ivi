import { BrowserSpriteSymbol } from '@/components/atoms/Icon/Icon.types';

export interface SocialProps {
	isDefault?: boolean;
	items?: [
		{
			icon: BrowserSpriteSymbol;
			width: number;
		},
	];
}
