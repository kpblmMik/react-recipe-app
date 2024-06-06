import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import RecipeList from './RecipeList';

const mock = new MockAdapter(axios);

const mockRecipes = [
    {
        id: 1,
        name: 'Recipe 1',
        image: 'recipe1.jpg'
    },
    {
        id: 2,
        name: 'Recipe 2',
        image: 'recipe2.jpg'
    }
];


mock.onGet('http://localhost:3001/recipes').reply(200, mockRecipes);

test('renders the recipe list', async () => {
    render(
        <BrowserRouter>
            <RecipeList />
        </BrowserRouter>
    );

    await waitFor(() => {
        mockRecipes.forEach(recipe => {
            expect(screen.getByText(recipe.name)).toBeInTheDocument();
            expect(screen.getByAltText(recipe.name)).toBeInTheDocument();
        });
    });
});
