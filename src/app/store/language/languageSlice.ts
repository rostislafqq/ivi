import { createSlice } from '@reduxjs/toolkit';

import type { RootState } from '..';
import type { PayloadAction } from '@reduxjs/toolkit';

export type LanguageType = 'ru' | 'en';
interface LanguageStateType {
	language: LanguageType;
}

const initialState: LanguageStateType = {
	language: 'ru',
};

export const languageSlice = createSlice({
	name: 'language',
	initialState,
	reducers: {
		setLanguage(state, action: PayloadAction<LanguageStateType>) {
			// eslint-disable-next-line no-param-reassign
			state.language = action.payload.language;
		},
	},
});

export const { setLanguage } = languageSlice.actions;

export const selectLanguage = (state: RootState) => state.language;
