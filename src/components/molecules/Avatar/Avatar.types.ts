import React from 'react';

export interface AvatarProps {
	href: string;
	isAuth: boolean;
	login?: string;
	onMouseOver: (event: React.MouseEvent<HTMLAnchorElement>) => void;
	onMouseOut: (event: React.MouseEvent<HTMLAnchorElement>) => void;
}
