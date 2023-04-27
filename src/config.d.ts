declare module '*.module.scss' {
	const value: Record<string, string>;
	export default value;
}

declare module '*.jpg' {
	const value: string;
	export default value;
}

declare module '*.svg' {
	interface BrowserSpriteSymbol {
		id: string;
		viewBox: string;
		content: string;
		node: SVGSymbolElement;
	}

	const value: BrowserSpriteSymbol;
	export default value;
}

declare module '*.png' {
	const value: string;
	export default value;
}

declare module '*.gif' {
	const value: string;
	export default value;
}
