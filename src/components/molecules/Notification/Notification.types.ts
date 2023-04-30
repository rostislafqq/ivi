import React from 'react';

export interface NotificationProps {
	href: string;
	count: number;
	onMouseOver?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
	onMouseOut?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
}
