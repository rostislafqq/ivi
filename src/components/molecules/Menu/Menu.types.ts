export interface MenuLink {
	text: string;
	href: string;
	className?: string;
}

export interface MenuProps {
	linksList: MenuLink[];
	title?: string;
	isHorizontal?: boolean;
}
