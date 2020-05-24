import React from "react";
import FetchData from "../components/FetchData/FetchData";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="page-header">
        <h1 className="app-title">All Your Recipes</h1>
      </header>
      <FetchData />
    </div>
  );
}

export default App;
