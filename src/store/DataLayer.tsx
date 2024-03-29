import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import { Provider } from 'react-redux';
import { FC } from 'react';
import React from 'react';
import usersReducer from './slices/users/usersSlice';
import authReducer from './slices/users/authSlice';
type Props = {
  children: React.ReactNode;
};

const reducer = combineReducers({
  users: usersReducer, // Represents all the users from database
  user: authReducer // Represents the logged in user profile data
});

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
});

const DataLayerComponent: FC<Props> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default DataLayerComponent;
