export interface MenuLink {
	text: string;
	href: string;
}

export interface MenuProps {
	linksList: MenuLink[];
	title?: string;
	isHorizontal?: boolean;
}
