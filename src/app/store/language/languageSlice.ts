/* eslint-disable no-param-reassign */
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface Language {
	languageActive: 'ru' | 'en';
}

const initialState: Language = {
	languageActive: 'ru',
} as Language;

export const languageSlice = createSlice({
	name: 'language',
	initialState,
	reducers: {
		setlanguage: (state: Language, action: PayloadAction<'ru' | 'en'>) => {
			state.languageActive = action.payload;
		},
	},
});

export const { setlanguage } = languageSlice.actions;

export default languageSlice.reducer;
