import Axios from "axios";
import React, { ReactElement, useCallback, useEffect, useState } from "react";
import Recipe from "./Recipe";
import "./Recipes.css";

export default function Recipes(): ReactElement {
  const APP_ID = "bcf72ecd";
  const APP_KEY = "3eba030c527845f34fe665899441bd71";
  const [recipes, setRecipes] = useState<any[]>([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");
  const [firstRenderCompleted, setFirstRenderCompleted] = useState(false);

  // useEffect(()=>{
  //         Axios.get('https://api.edamam.com/search?q='+query+'&app_id='+APP_ID+'&app_key='+APP_KEY).then((response: { data: any; })=>{
  //         console.log(response)
  //         setRecipes(response.data.hits);
  //         console.log(response.data)
  //     })
  // }, [query])

  const getData = useCallback(async () => {
    const response = await Axios.get(
      "https://api.edamam.com/search?q=" +
        query +
        "&app_id=" +
        APP_ID +
        "&app_key=" +
        APP_KEY
    );
    setRecipes(response.data.hits);
    setFirstRenderCompleted(true);
    console.log(firstRenderCompleted + " " + recipes.length);
  }, [query]);

  useEffect(() => {
    getData();
  }, [getData]);

  const getSearch = (e: any) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  if (firstRenderCompleted && recipes.length == 0) throw new Error();
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <form className="search-form" onSubmit={getSearch}>
            <input
              className="search-bar"
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button className="search-buttom" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
      <div className="row">
        {recipes.map((recipe) => (
          <div className="col-sm-6" key={recipe.recipe.label}>
            <Recipe
              title={recipe.recipe.label}
              calories={recipe.recipe.calories}
              image={recipe.recipe.image}
              ingredients={recipe.recipe.ingredients}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
