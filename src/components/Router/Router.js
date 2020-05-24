import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "../../containers/App";
import Ingredients from "../Ingredients/Ingredients";
import Recipes from "../Recipes/Recipes";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={App}></Route>
      <Route path="/ingredients/:id" component={Ingredients}></Route>

      <Route>
        <h1 style={{ color: "red", display: "flex", justifyContent: "center" }}>
          Not Found 404
        </h1>
      </Route>
    </Switch>
  </BrowserRouter>
);

export default Router;
