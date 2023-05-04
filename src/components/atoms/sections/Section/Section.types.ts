import React from 'react';

export interface SectionProps {
	id: string;
	children: React.ReactNode;
	tag?: 'section' | 'div';
	className?: string;
}
