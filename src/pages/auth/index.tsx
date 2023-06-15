/* eslint-disable @typescript-eslint/no-floating-promises */
import { AnyAction, ThunkDispatch } from '@reduxjs/toolkit';

import { useRouter } from 'next/router';

import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '@/app/store';

import { login } from '@/app/store/auth/authSlice';

import { Login } from '@/components/organisms';

import { Layout } from '@/components/templates';

const Auth = () => {
	type AppDispatch = ThunkDispatch<RootState, undefined, AnyAction>;
	const dispatch: AppDispatch = useDispatch();
	const loginHandle = (email: string, password: string) => {
		dispatch(login({ email, password }));
	};
	const isAuth = useSelector((state: RootState) => state.auth.isAuth);
	const router = useRouter();
	useEffect(() => {
		if (isAuth) {
			router.push('/');
		}
	}, []);

	return (
		<Layout title="ivi логин" description="Стриминговая платформа фильмов - Ivi">
			<Login loginHandle={loginHandle} />
		</Layout>
	);
};
export default Auth;
