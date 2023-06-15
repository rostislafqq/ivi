/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable no-param-reassign */

import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import AuthService from '@/auth/services/AuthService';

import { IUser } from '@/auth/types/User';

export interface Auth {
	user: IUser;
	isAuth: boolean;
}
let userFromLocalStorage = {};
try {
	const storedUser = localStorage.getItem('user');
	if (storedUser) {
		userFromLocalStorage = JSON.parse(storedUser);
	}
} catch (error) {
	console.error(error);
}

const initialState: Auth = {
	user: userFromLocalStorage,
	isAuth: false,
} as Auth;

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setAuth: (state: Auth, action: PayloadAction<boolean>) => {
			state.isAuth = action.payload;
		},
		setUser: (state, action: PayloadAction<IUser>) => {
			state.user = action.payload;
		},
	},
});

export const { setAuth, setUser } = authSlice.actions;

export const login = createAsyncThunk(
	'auth/login',
	async (payload: { email: string; password: string }, { dispatch }) => {
		try {
			console.log(payload);
			const response = await AuthService.login(payload.email, payload.password);
			localStorage.setItem('token', response.data);
			const data = await AuthService.getUser();
			localStorage.setItem('user', JSON.stringify(data.data));
			dispatch(setUser(data.data));
			dispatch(setAuth(true));
		} catch (e) {
			console.log(e);
			dispatch(setAuth(false));
			dispatch(setUser({}));
			localStorage.setItem('user', {});
		}
	},
);

export const registration = createAsyncThunk(
	'auth/registration',
	async (payload: { email: string; password: string; firstName: string; lastName: string }, { dispatch }) => {
		try {
			const response = await AuthService.registration(
				payload.email,
				payload.password,
				payload.firstName,
				payload.lastName,
			);
			console.log(response);
			localStorage.setItem('token', response.data);
			const data = await AuthService.getUser();
			console.log(data);
			localStorage.setItem('user', JSON.stringify(data.data));
			dispatch(setUser(data.data));
			dispatch(setAuth(true));
		} catch (e) {
			console.log(e);
			dispatch(setAuth(false));
			dispatch(setUser({}));
			localStorage.setItem('user', {});
		}
	},
);

export const checkAuth = createAsyncThunk('auth/checkAuth', async (_, { dispatch }) => {
	try {
		const response = await AuthService.getUser();
		dispatch(setAuth(true));
	} catch (e) {
		console.log(e);
		dispatch(setAuth(false));
		dispatch(setUser({}));
		localStorage.setItem('user', {});
	}
});

export default authSlice.reducer;
