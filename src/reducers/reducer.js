const initialState = {
  loading: false,
};

const reducer = (state = initialState, action) => {
  const newState = { ...state };

  switch (action.type) {
    case "LOADING":
      newState.loading = true;
      break;

    default:
      return newState;
  }
  return newState;
};

export default reducer;
