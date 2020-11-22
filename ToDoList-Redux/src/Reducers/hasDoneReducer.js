export const HasDoneReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_DONE_ITEM":
      return [...action.payload];
    case "REMOVER_JOB":
      return [...action.payload];
    default:
      return state;
  }
};
