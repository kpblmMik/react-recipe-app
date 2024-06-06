import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    axios.get(`https://react-recipe-mik.s3-website.eu-central-1.amazonaws.com/db.json`)
      .then(response => setRecipe(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, [id]);

  if (!recipe) return <p>Loading...</p>;

  return (
    <div className="border border-gray-300 p-4 max-w-xl mx-auto">
      <h2 className="text-2xl font-bold">{recipe.name}</h2>
      <img src={recipe.image} alt={recipe.name} className="w-full h-auto object-cover mt-4" />
      <div className="mt-4">
        <h3 className="text-xl font-bold">Ingredients</h3>
        <ul className="list-disc pl-4 mt-2">
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
      </div>
      <div className="mt-4">
        <h3 className="text-xl font-bold">Instructions</h3>
        <p className="mt-2">{recipe.steps}</p>
      </div>
    </div>
  );
};

export default RecipeDetail;