import React from 'react';

import { TextTagType } from '../typography.types';

export interface TextLinkProps {
	children: React.ReactNode;
	tag: TextTagType;
	href: string;
	className?: string;
}
