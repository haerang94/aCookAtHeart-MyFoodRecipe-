const initialState = {
  isLogged: false,
};

const reducer = (state = initialState, action) => {
  const newState = { ...state };

  switch (action.type) {
    case "LOGINOUT":
      newState.isLogged = !state.isLogged;
      break;

    default:
      return newState;
  }
  return newState;
};

export default reducer;
