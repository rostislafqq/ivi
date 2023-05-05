import React from 'react';

export interface SectionHeadingProps {
	children: React.ReactNode;
	tag: 'h1' | 'h2' | 'h3';
	className?: string;
	href?: string;
	arrow?: boolean;
	underline?: boolean;
	count?: number;
}
