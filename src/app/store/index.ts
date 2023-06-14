import { configureStore } from '@reduxjs/toolkit';

import { languageSlice } from './language/languageSlice';

import { userSlice } from './user/userSlice';

export const store = configureStore({
	reducer: {
		user: userSlice.reducer,
		language: languageSlice.reducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
