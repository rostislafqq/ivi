import React from 'react';

import { TextTagType } from '../typography.types';

export interface TextLinkProps {
	children: React.ReactNode;
	tag: TextTagType;
	href: string;
	className?: string;
	onMouseOver?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
	onMouseOut?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
}
