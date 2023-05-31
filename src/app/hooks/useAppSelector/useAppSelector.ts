import { useSelector, TypedUseSelectorHook } from 'react-redux';

import { RootState } from '@/app/story';

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
