import React, { Suspense, lazy } from "react";
// import FetchData from "../components/FetchData/FetchData";
import "./Home.css";
import Loader from "../components/Loader/Loader";
import { connect } from "react-redux";
import * as actions from "../actions/actions";

const LazyFetchData = lazy(() => import("../components/FetchData/FetchData"));

const Home: React.FC = () => {
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
};

const mapStateToProps = (state) => {
  return {
    loading: state.loading,
  };
};

const mapDispachToProps = (dispatch) => {
  return {
    loading: () => dispatch(actions.loading()),
  };
};

export default connect(mapStateToProps, mapDispachToProps)(Home);
