import React from 'react';

export interface InputProps {
	className?: string;
	type: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	value: string | number;
}
