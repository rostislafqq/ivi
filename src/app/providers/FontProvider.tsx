import classNames from "classnames";
import React from 'react';

import { iviFont } from '@app/providers/fonts';

interface FontProviderProps {
	children: React.ReactNode;
}

const FontProvider: React.FC<FontProviderProps> = ({ children }) => {
	const classes = classNames(iviFont.className, 'test')
	return <div className={classes}>{children}</div>;

}

export default FontProvider;
