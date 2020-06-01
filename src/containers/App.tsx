import React, { lazy, Suspense } from "react";
import Ingredients from "../components/Ingredients/Ingredients";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Loader from "../components/Loader/Loader";

const Home = lazy(() => import("./Home"));
const Nav = lazy(() => import("../components/Nav/Nav"));

const App: React.FC = () => {
  return (
    <Router>
      <Suspense fallback={Loader()}>
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
      </Suspense>
    </Router>
  );
};

const style = {
  color: "red",
  display: "flex",
  justifyContent: "center",
};

export default App;
