import React from 'react';

import { iviFont } from '@app/providers/fonts';

interface FontProviderProps {
	children: React.ReactNode;
}

const FontProvider: React.FC<FontProviderProps> = ({ children }) => {
	return <div className={iviFont.className}>{children}</div>;
};

export default FontProvider;
