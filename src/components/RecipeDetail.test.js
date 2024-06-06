import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import axios from 'axios';
import RecipeDetail from './RecipeDetail';
import { useParams } from 'react-router-dom';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: jest.fn()
}));

test('renders RecipeDetail component', async () => {
  useParams.mockReturnValue({ id: '1' });

  const mockRecipeData = {
    id: '1',
    name: 'Test Recipe',
    image: 'test.jpg',
    ingredients: ['Ingredient 1', 'Ingredient 2'],
    steps: 'Step 1, Step 2'
  };
  jest.spyOn(axios, 'get').mockResolvedValue({ data: mockRecipeData });
  
  render(<RecipeDetail />);

  await waitFor(() => {
    expect(screen.getByText(/Test Recipe/i)).toBeInTheDocument();
    expect(screen.getByAltText('Test Recipe')).toBeInTheDocument();
    expect(screen.getByText(/Ingredient 1/i)).toBeInTheDocument();
    expect(screen.getByText(/Step 1, Step 2/i)).toBeInTheDocument();
  });
});

test('displays loading state while fetching data', async () => {
  useParams.mockReturnValue({ id: '1' });

  jest.spyOn(axios, 'get').mockReturnValue(new Promise(() => {}));

  render(<RecipeDetail />);

  expect(screen.getByText(/Loading.../i)).toBeInTheDocument();
});
