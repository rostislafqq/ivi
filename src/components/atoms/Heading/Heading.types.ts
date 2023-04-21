import React from 'react';

export interface HeadingProps {
	tag: 'h1' | 'h2' | 'h3' | 'h4';
	children: React.ReactNode;
	className?: string;
}
