interface BrowserSpriteSymbol {
	id: string;
	viewBox: string;
	content: string;
	node: SVGSymbolElement;
}

export interface IconProps {
	icon: BrowserSpriteSymbol;
	width: number | string;
	height?: number | string;
}
