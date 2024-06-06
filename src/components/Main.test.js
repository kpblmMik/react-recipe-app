import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Main from './Main';
import RecipeList from './RecipeList';
import RecipeDetail from './RecipeDetail';
import { ThemeProvider } from '../contexts/ThemeContext';

test('renders Main component with child components', () => {
  render(
    <ThemeProvider>
      <MemoryRouter initialEntries={['/']}>
        <Main />
      </MemoryRouter>
    </ThemeProvider>
  );

  const mainElement = screen.getByRole('main');
  expect(mainElement).toBeInTheDocument();
});