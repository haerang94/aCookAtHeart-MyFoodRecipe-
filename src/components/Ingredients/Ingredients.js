import React from "react";
import "./Ingredients.css";
import { connect } from "react-redux";
import * as actions from "../../actions/actions";

const Ingredients = (props) => {
  const isLogged = props.logInOut;
  return (
    <>
      {isLogged ? (
        <div className="ingredients">Ingredients Component</div>
      ) : (
        "로그인필요"
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    logInOut: state.logInOut,
  };
};

const mapDispachToProps = (dispatch) => {
  return {
    loading: () => dispatch(actions.logInOut()),
  };
};

export default connect(mapStateToProps, mapDispachToProps)(Ingredients);
