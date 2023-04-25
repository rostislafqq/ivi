import React from 'react';

import { HeadingTagType } from '../typography.types';

export interface HeadingLinkProps {
	tag: HeadingTagType;
	href: string;
	children: React.ReactNode;
	className?: string;
}
