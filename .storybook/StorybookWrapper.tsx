import React from 'react';
import { ThemeProvider, themes } from '@storybook/theming';
import { iviFont } from '../.storybook/iviFonts';
import { ReduxProvider } from '@/app/providers';

const theme = {
	...themes.dark,
	fontFamily: {
		headlines: iviFont.style.fontFamily,
		body: iviFont.style.fontFamily,
	},
};

export const StorybookWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	return (
		<ReduxProvider>
			<ThemeProvider theme={theme}>
				<style jsx global>{`
					html {
						font-family: ${iviFont.style.fontFamily};
					}
				`}</style>
				{children}
			</ThemeProvider>
		</ReduxProvider>
	);
};
