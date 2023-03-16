import { configureStore, PreloadedState } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import globalState from './slices/users';
const rootReducer = combineReducers({
  globalState
});

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
