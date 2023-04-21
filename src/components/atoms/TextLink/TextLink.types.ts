type TargetType = '_blank' | '_self';

export interface TextLinkProps {
	children: React.ReactNode;
	href: string;
	className?: string;
	isDisabled?: boolean;
	target?: TargetType;
	handlerClick?: () => void;
	bold?: boolean;
}
