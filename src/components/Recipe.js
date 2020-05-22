import React from "react";

const Recipe = ({ recipe }) => {
  const { label, image, url, ingredients } = recipe.recipe;

  return (
    <div className="recipe" style={{ margin: "10px", padding: "10px" }}>
      <h2>{label}</h2>
      <img src={image} alt={label} />
      <a href={url} target="_blank" rel="noopener noreferrer">
        Recipe Link
      </a>
      <button>ingredients</button>
    </div>
  );
};

export default Recipe;
