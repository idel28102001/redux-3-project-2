import type { ThunkDispatch } from '@reduxjs/toolkit';
import { applyMiddleware, combineReducers, createStore } from '@reduxjs/toolkit';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import reducers, { AllActions } from './reducers';

const rootReducer = combineReducers(reducers);
export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = ThunkDispatch<RootState, void, AllActions>;
