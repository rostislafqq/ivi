import React from 'react';

import { Login } from '@/components/organisms';

import { Layout } from '@/components/templates';

const Auth = () => {
	const a = 1;
	return (
		<Layout title="ivi регистрация" description="Стриминговая платформа фильмов - Ivi">
			<Login />
		</Layout>
	);
};
export default Auth;
