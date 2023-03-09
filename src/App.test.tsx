import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import App from './App';
import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';

const initialState = {
  data: [],
  hasError: false,
  isLoading: false
};

describe('App Rendering', () => {
  test('renders App page succesfully', () => {
    const store = configureStore();

    render(
      <Router>
        <Provider store={store(initialState)}>
          <App />
        </Provider>
      </Router>
    );

    expect(screen.getByText(/Save/i)).toBeDefined();
  });
});
