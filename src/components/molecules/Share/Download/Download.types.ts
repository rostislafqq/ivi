import { BrowserSpriteSymbol } from '@/components/atoms/Icon/Icon.types';

export interface DownloadProps {
	isDefault?: boolean;
	contentData?: [
		{
			icon: BrowserSpriteSymbol;
			width: number;
			boldText?: string;
			smallText?: string;
			href: string;
		},
	];
}
