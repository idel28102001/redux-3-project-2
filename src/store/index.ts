import { combineReducers, createStore } from '@reduxjs/toolkit';

import reducers from './reducers';

const rootReducer = combineReducers(reducers);
export const store = createStore(rootReducer);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
