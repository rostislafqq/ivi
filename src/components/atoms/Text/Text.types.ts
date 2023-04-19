import React from 'react';

export interface TextProps {
	children: React.ReactNode;
	tag: 'p' | 'span' | 'div';
	size: 'small' | 'base';
	color: 'red' | 'blue' | 'gray';
	className?: string;
}
