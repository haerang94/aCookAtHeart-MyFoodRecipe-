import React from "react";
import Ingredients from "../components/Ingredients/Ingredients";
import Home from "./Home";
import "./App.css";
import Nav from "../components/Nav/Nav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/home" component={Home} />
          <Route path="/ingredients/:id" component={Ingredients} />
          <Route>
            <h1 style={style}>Not Found 404</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

const style = {
  color: "red",
  display: "flex",
  justifyContent: "center",
};

export default App;
