import React from "react";
import "./Ingredients.css";
import { connect } from "react-redux";
import * as actions from "../../actions/actions";
import { useSelector, useDispatch } from "react-redux";

const Ingredients = (props) => {
  const isLogged = useSelector((state) => state.logInOut);
  const dispatch = useDispatch();
  return (
    <>
      {isLogged ? (
        <div className="ingredients">Ingredients Component</div>
      ) : (
        <div className="login-form">
          로그인이 필요합니다
          <button onClick={() => dispatch(actions.logInOut())}>로그인</button>
          {/* props로 받아올시 문법질문  */}
          {/* <button onClick={() => dispatch(actions.logInOut())}>로그인</button> */}
        </div>
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
    logInOut: () => dispatch(actions.logInOut()),
  };
};

export default connect(mapStateToProps, mapDispachToProps)(Ingredients);
