import { configureStore } from '@reduxjs/toolkit';

import auth from './auth/authSlice';

import language from './language/languageSlice';

import { userSlice } from './user/userSlice';

export const store = configureStore({
	reducer: {
		user: userSlice.reducer,
		language,
		auth,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
