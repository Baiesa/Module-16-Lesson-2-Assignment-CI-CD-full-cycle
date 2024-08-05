import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Comment App title', () => {
  render(<App />);
  const titleElement = screen.getByText(/Comment App/i);
  expect(titleElement).toBeInTheDocument();
});