import React from 'react';

import { iviFont } from './fonts';

interface FontProviderProps {
	children: React.ReactNode;
}

const FontProvider: React.FC<FontProviderProps> = ({ children }) => <div className={iviFont.className}>{children}</div>;

export default FontProvider;
