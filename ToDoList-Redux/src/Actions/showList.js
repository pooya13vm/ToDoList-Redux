export const btnToggler = (x) => {
  return async (dispatch, getState) => {
    await dispatch({ type: "BTN_TOGGLER", payload: !x });
  };
};
