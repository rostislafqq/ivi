import React from 'react';
import { Provider } from 'react-redux';

import { store } from '@/app/story';

import type { ReduxProviderProps } from './ReduxProvider.types';

export const ReduxProvider: React.FC<ReduxProviderProps> = ({ children }) => (
	<Provider store={store}>{children}</Provider>
);
