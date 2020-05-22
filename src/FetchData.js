import React, { useState, useEffect } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { key, app_id } from "./Config";
import Recipe from "./components/Recipe";
import "./FetchData.css";

const FetchData = () => {
  const [food, setFood] = useState("");
  const [recipes, setRecipes] = useState([]);

  const url = `https://api.edamam.com/search?q=${food}&app_id=${app_id}&app_key=${key}&from=0&to=10&calories=591-722`;

  const getData = async () => {
    let data;
    await axios
      .get(url)
      .then((res) => {
        console.log(res);
        data = res;
        return res;
      })
      .catch((err) => console.log(err));
    setRecipes(data.data.hits);
    setFood("");
  };

  const onSubmit = (e) => {
    e.preventDefault();
    getData();
  };

  const onChange = (e) => {
    setFood(e.target.value);
  };

  return (
    <>
      <form className="search-form" onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Search your food"
          onChange={onChange}
          value={food}
        />
        <input type="submit" value="search" />
      </form>
      {/* 각 레시피 리스트 인덱스는 (recipe,idx)의 idx나 uuid4사용 */}
      <div className="recipes">
        {recipes !== [] &&
          recipes.map((recipe) => <Recipe key={uuidv4()} recipe={recipe} />)}
      </div>
    </>
  );
};

export default FetchData;
