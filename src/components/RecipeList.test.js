import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import axios from 'axios';
import RecipeList from './RecipeList';

test('renders RecipeList component', async () => {
  const mockRecipes = [
    { id: '1', name: 'Recipe 1', image: 'recipe1.jpg' },
    { id: '2', name: 'Recipe 2', image: 'recipe2.jpg' }
  ];
  jest.spyOn(axios, 'get').mockResolvedValue({ data: mockRecipes });

  render(<RecipeList />);

  await waitFor(() => {
    expect(screen.getByText(/Recipe 1/i)).toBeInTheDocument();
    expect(screen.getByText(/Recipe 2/i)).toBeInTheDocument();
    expect(screen.getByAltText('Recipe 1')).toBeInTheDocument();
    expect(screen.getByAltText('Recipe 2')).toBeInTheDocument();
  });
});

test('displays loading state while fetching data', async () => {

  jest.spyOn(axios, 'get').mockReturnValue(new Promise(() => {}));

  render(<RecipeList />);

  expect(screen.getByText(/Loading.../i)).toBeInTheDocument();
});
