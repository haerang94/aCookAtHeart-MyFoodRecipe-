import React, { useState, useEffect } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { app_id, key } from "../../Config";
import Recipes from "../Recipes/Recipes";
import "./FetchData.css";

const FetchData = () => {
  const [food, setFood] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState("korean");

  const url = `https://api.edamam.com/search?q=${query}&app_id=${app_id}&app_key=${key}&from=0&to=10&calories=591-722`;

  // Get Data by Fetch
  // const getData = async () => {
  //   const response = await fetch(url);
  //   const data = await response.json();
  //   console.log(data);
  //   setRecipes(data.hits);
  //   console.log(data.hits);
  // };

  const getData = async () => {
    let data = await axios
      .get(url)
      .then((res) => res)
      .catch((err) => console.log(err));
    console.log(data.data.hits);
    setRecipes(data.data.hits);
  };

  useEffect(() => {
    getData();
  }, [query]);

  const onSubmit = (e) => {
    //새로  저장된 검색 food를 가지고 다시 url 호출
    e.preventDefault();
    setQuery(food);
    setFood("");
  };

  const onChange = (e) => {
    //검색하는 food를 바꿔준다.
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
      <div className="searched-recipes">
        {recipes !== [] &&
          recipes.map((recipe) => <Recipes key={uuidv4()} recipe={recipe} />)}
      </div>
    </>
  );
};

export default FetchData;
