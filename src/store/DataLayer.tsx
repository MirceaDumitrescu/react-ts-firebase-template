import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import globalState from './actions/globalState';
import { Provider } from 'react-redux';
import { FC } from 'react';
import React from 'react';

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
