import React from 'react';
import { screen } from '@testing-library/react';
import render from './test-utils';
import App from './App';

test('Renders login when the app is launched', () => {
  render(<App />);
  const usernameInput = screen.getByRole('enter-username');
  expect(usernameInput).toBeInTheDocument();
});

test('Renders messages screen when user is set', () => {
  localStorage.setItem('user', 'John');
  render(<App />);
  const messageBox = screen.getByRole('message-box');
  expect(messageBox).toBeInTheDocument();
});

