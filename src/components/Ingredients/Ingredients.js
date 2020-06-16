import React from "react";
import "./Ingredients.css";
import { connect } from "react-redux";
import * as actions from "../../actions/actions";

const Ingredients = ({ isLogged, logInOut }) => {
  return (
    <>
      {isLogged ? (
        <div className="ingredients">Ingredients Component</div>
      ) : (
        <div className="login-form">
          로그인이 필요합니다
          <button onClick={logInOut}>로그인</button>
        </div>
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    isLogged: state.isLogged,
  };
};

const mapDispachToProps = (dispatch) => {
  return {
    logInOut: () => dispatch(actions.logInOut()),
  };
};

export default connect(mapStateToProps, mapDispachToProps)(Ingredients);
