import { configureStore, PreloadedState } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import usersReducer from './slices/users/usersSlice';
const rootReducer = combineReducers({
  usersReducer
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
