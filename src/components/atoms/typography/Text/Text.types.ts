import React from 'react';

import { TextTagType } from '../typography.types';

export interface TextProps {
	children: React.ReactNode;
	tag: TextTagType;
	className?: string;
}
