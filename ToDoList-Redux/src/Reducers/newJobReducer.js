export const NewJobReducer = (state = "", action) => {
  switch (action.type) {
    case "SET_JOB_HOLDER":
      return action.payload;
    case "CLEAR_JOB_HOLDER":
      return action.payload;
    default:
      return state;
  }
};
