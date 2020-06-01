import React from "react";
import "./Recipes.css";

interface Recipe {
  label: string;
  image: string;
  url: string;
  ingredients: string;
  source: string;
}

interface Props {
  recipe: {
    recipe: Recipe;
  };
}

const Recipes: React.FC<Props> = ({ recipe }) => {
  const { label, image, url, ingredients, source } = recipe.recipe;

  return (
    <div className="recipes">
      <h2>{label}</h2>
      <img src={image} alt={label} />
      <a href={url} target="_blank" rel="noopener noreferrer">
        Recipe Link
      </a>
      <p>publisher: {source}</p>

      <button className="ingredient-btn">See ingredient</button>
    </div>
  );
};

export default Recipes;
