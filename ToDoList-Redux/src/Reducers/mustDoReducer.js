export const MustDoReducer = (state = [], action) => {
  switch (action.type) {
    case "MOVER_JOB":
      return [...action.payload];
    case "EDIT_ITEM":
      return [...action.payload];
    case "ADD_ITEM":
      return [...action.payload];
    default:
      return state;
  }
};
