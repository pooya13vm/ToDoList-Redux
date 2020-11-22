export const ValueHolderReducer = (state = "", action) => {
  switch (action.type) {
    case "SET_HOLDER":
      return action.payload;
    case "CLEAR_HOLDER":
      return action.payload;
    default:
      return state;
  }
};
