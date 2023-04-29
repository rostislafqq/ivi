import React from 'react';

export interface FilmStatusProps {
	children: React.ReactNode;
	variant: 'free' | 'subscribe' | 'buy';
	className?: string;
}
