import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const RecipeList = () => {
  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('https://7knb1t81pb.execute-api.eu-central-1.amazonaws.com/recipes')
      .then(response => {
        if (!Array.isArray(response.data)) {
          setError('Received data is not an array');
          console.error('Received data is not an array:', response.data);
        } else {
          setRecipes(response.data);
        }
      })
      .catch(error => {
        setError(error.message);
        console.error('Error fetching data:', error);
      });
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

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
