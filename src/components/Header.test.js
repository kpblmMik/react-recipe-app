import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Header from './Header';
import { ThemeProvider } from '../contexts/ThemeContext';

test('renders Header component', () => {
  render(
    <ThemeProvider>
      <Header />
    </ThemeProvider>
  );

  expect(screen.getByText(/Recipe App/i)).toBeInTheDocument();
});

test('toggle theme when theme switcher button is clicked', () => {
  const toggleThemeMock = jest.fn();

  render(
    <ThemeProvider value={{ theme: 'light', toggleTheme: toggleThemeMock }}>
      <Header />
    </ThemeProvider>
  );

  fireEvent.click(screen.getByRole('button'));

  expect(toggleThemeMock).toHaveBeenCalled();
});
