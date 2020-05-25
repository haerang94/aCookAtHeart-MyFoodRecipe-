import React from "react";
import FetchData from "../components/FetchData/FetchData";
import "./Home.css";

// const LazyFetchData = React.lazy(() =>
//   import("../components/FetchData/FetchData")
// );

function Home() {
  return (
    <div className="Home">
      <header className="page-header">
        <h1 className="app-title">All Your Recipes</h1>
      </header>

      <FetchData />
    </div>
  );
}

export default Home;
