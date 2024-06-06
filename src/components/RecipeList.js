import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const RecipeList = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    axios.get('/db.json')
      .then(response => setRecipes(response.data.recipes))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {recipes.map(recipe => (
        <div key={recipe.id} className="border p-4">
          <Link to={`/recipes/${recipe.id}`}>
            <h2 className="text-xl font-bold">{recipe.name}</h2>
            <img src={recipe.image} alt={recipe.name} className="w-1/2 h-auto object-cover mt-2"/>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
