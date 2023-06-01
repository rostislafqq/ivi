import { createSlice } from '@reduxjs/toolkit';

import type { RootState } from '..';
import type { UserType } from '@/app/types';

export const userSlice = createSlice({
	name: 'user',
	initialState: {} as UserType,
	reducers: {},
});

export const selectUser = (state: RootState) => state.user;
