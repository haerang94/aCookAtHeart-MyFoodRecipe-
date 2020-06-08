const initialState = {
  logInOut: false,
};

const reducer = (state = initialState, action) => {
  const newState = { ...state };

  switch (action.type) {
    case "LOGINOUT":
      newState.logInOut = !state.logInOut;
      break;

    default:
      return newState;
  }
  return newState;
};

export default reducer;
