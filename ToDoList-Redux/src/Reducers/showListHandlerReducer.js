export const ShowListReducer = (state = true, action) => {
  switch (action.type) {
    case "BTN_TOGGLER":
      return !state;
    default:
      return state;
  }
};
