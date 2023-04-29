export interface Item {
	label: string;
	href: string;
	active?: boolean;
}

export interface BreadcrumbProps {
	items: Item[];
	variant: 'classic' | 'modern';
	className?: string;
}
