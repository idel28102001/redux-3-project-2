import type { TypedUseSelectorHook } from 'react-redux';
import { useSelector } from 'react-redux';

import { RootState } from '../store';

export const useTypedSelect: TypedUseSelectorHook<RootState> = useSelector;
