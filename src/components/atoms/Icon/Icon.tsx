import * as React from "react";
import styles from "./icon.module.scss";

export interface BrowserSpriteSymbol {
	id: string;
	viewBox: string;
	content: string;
	node: SVGSymbolElement;
}

export interface IIconProps {
	icon: BrowserSpriteSymbol;
	width: number | string;
	height?: number | string;
}

export const Icon: React.FC<IIconProps> = ({
	icon,
	width,
	height = "100%",
}) => {
	return (
		<svg
			viewBox={icon.viewBox}
			width={width}
			height={height}
			className={styles.icon}
		>
			<use xlinkHref={`#${icon.id}`} />
		</svg>
	);
};
