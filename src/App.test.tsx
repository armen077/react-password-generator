import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders generate button', () => {
  render(<App />);
  const linkElement = screen.getByText(/generate/i);
  expect(linkElement).toBeInTheDocument();
});
