import React from 'react';

import { Footer } from '@/components/organisms';

import type { LayoutProps } from './Layout.types';

export const Layout: React.FC<LayoutProps> = ({ children }) => (
	<>
		<header>Header</header>

		<main>{children}</main>

		<Footer />
	</>
);
