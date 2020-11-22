export const setJobHolder = (event) => {
  return async (dispatch) => {
    await dispatch({ type: "SET_JOB_HOLDER", payload: event.target.value });
  };
};

export const clearJobHolder = () => {
  return async (dispatch) => {
    await dispatch({ type: "CLEAR_JOB_HOLDER", payload: "" });
  };
};
