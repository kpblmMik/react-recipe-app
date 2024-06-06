import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from './Footer';
import { ThemeProvider } from '../contexts/ThemeContext';

test('renders Footer component', () => {
  render(
    <ThemeProvider>
      <Footer />
    </ThemeProvider>
  );

  expect(screen.getByText(/Recipe App/i)).toBeInTheDocument();
});
