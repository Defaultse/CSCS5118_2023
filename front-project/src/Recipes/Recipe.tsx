import React, { ReactElement } from "react";
import "./Recipes.css";

interface Props {
  title?: string;
  calories?: string;
  image?: string;
  ingredients: any;
}

export default function Recipe({
  title,
  calories,
  image,
  ingredients,
}: Props): ReactElement {
  return (
    <div className="recipe">
      <img className="image" src={image}></img>
      <h1 className="title">{title}</h1>
      <ol className="ingredients">
        {ingredients.map((ingredient) => (
          <li className="ingredients">{ingredient.text}</li>
        ))}
      </ol>
    </div>
  );
}
