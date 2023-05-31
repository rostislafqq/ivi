import { useDispatch } from 'react-redux';

import { AppDispatch } from '@/app/story';

export const useAppDispatch: () => AppDispatch = useDispatch;
