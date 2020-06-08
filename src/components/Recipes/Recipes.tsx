import React from "react";
import "./Recipes.css";
import { Link } from "react-router-dom";

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
  id: any;
}

const Recipes: React.FC<Props> = ({ recipe, id }) => {
  const { label, image, url, ingredients, source } = recipe.recipe;
  const linkPath = `/ingredients/${id}`;
  return (
    <div className="recipes">
      <h2>{label}</h2>
      <img src={image} alt={label} />
      <a href={url} target="_blank" rel="noopener noreferrer">
        Recipe Link
      </a>
      <p>publisher: {source}</p>
      <Link to={linkPath}>
        <button className="ingredient-btn">See ingredient</button>
      </Link>
    </div>
  );
};

export default Recipes;
