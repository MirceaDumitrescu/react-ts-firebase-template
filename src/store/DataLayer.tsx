import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import { Provider } from 'react-redux';
import { FC } from 'react';
import React from 'react';
import globalState from './slices/users';

type Props = {
  children: React.ReactNode;
};

const reducer = combineReducers({
  globalState
});

export const store = configureStore({
  reducer
});

const DataLayerComponent: FC<Props> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default DataLayerComponent;
