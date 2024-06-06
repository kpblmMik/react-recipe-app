import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Header from './Header';
import { ThemeProvider, ThemeContext } from '../contexts/ThemeContext';

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
    <ThemeContext.Provider value={{ theme: 'light', toggleTheme: toggleThemeMock }}> 
    {<ThemeContext.Provider value={{ theme: 'light', toggleTheme: toggleThemeMock }}>
    <Header />
  </ThemeContext.Provider>
  /}
      <Header />
    </ThemeContext.Provider>
  );

  fireEvent.click(screen.getByRole('button'));

  expect(toggleThemeMock).toHaveBeenCalled();
});
