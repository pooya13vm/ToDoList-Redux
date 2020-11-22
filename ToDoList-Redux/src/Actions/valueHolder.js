export const setHolder = (event) => {
  return async (dispatch) => {
    await dispatch({ type: "SET_HOLDER", payload: event.target.value });
  };
};

export const clearHolder = () => {
  return async (dispatch) => {
    await dispatch({ type: "CLEAR_HOLDER", payload: "" });
  };
};
