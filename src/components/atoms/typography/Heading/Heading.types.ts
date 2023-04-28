import React from 'react';

import { HeadingTagType } from '../typography.types';

export interface HeadingProps {
	tag: HeadingTagType;
	children: React.ReactNode;
	className?: string;
}
