import React, { Suspense, lazy } from "react";
// import FetchData from "../components/FetchData/FetchData";
import "./Home.css";
import Loader from "../components/Loader/Loader";

const LazyFetchData = lazy(() => import("../components/FetchData/FetchData"));

function Home() {
  return (
    <Suspense fallback={Loader()}>
      <div className="Home">
        <header className="page-header">
          <h1 className="app-title">All Your Recipes</h1>
        </header>

        <LazyFetchData />
      </div>
    </Suspense>
  );
}

export default Home;
