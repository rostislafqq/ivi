/* eslint-disable @typescript-eslint/no-floating-promises */
import { AnyAction, ThunkDispatch } from '@reduxjs/toolkit';

import { useRouter } from 'next/router';

import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '@/app/store';

import { registration } from '@/app/store/auth/authSlice';

import { Regestration } from '@/components/organisms/Regestration/Regestration';

import { Layout } from '@/components/templates';

const RegestrationContainer = () => {
	type AppDispatch = ThunkDispatch<RootState, undefined, AnyAction>;
	const dispatch: AppDispatch = useDispatch();
	const loginHandle = (email: string, password: string, firstName: string, lastName: string) => {
		dispatch(registration({ email, password, firstName, lastName }));
	};

	const isAuth = useSelector((state: RootState) => state.auth.isAuth);
	const router = useRouter();
	useEffect(() => {
		if (isAuth) {
			router.push('/');
		}
	}, []);

	return (
		<Layout title="ivi регистрация" description="Стриминговая платформа фильмов - Ivi">
			<Regestration loginHandle={loginHandle} />
		</Layout>
	);
};

export default RegestrationContainer;
