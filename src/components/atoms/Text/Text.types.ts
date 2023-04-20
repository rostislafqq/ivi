import React from 'react';

export interface TextProps {
	children: React.ReactNode;
	tag: 'p' | 'span' | 'div';
	className?: string;
}
