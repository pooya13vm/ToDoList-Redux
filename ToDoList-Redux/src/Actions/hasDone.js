import { toast } from "react-toastify";

export const addToHasDone = (item) => {
  return async (dispatch, getState) => {
    const hasDoneCopy = [...getState().hasDone];
    hasDoneCopy.push(item);
    await dispatch({ type: "ADD_DONE_ITEM", payload: hasDoneCopy });
  };
};

export const remover = (id) => {
  return async (dispatch, getState) => {
    const hasDoneCopy = [...getState().hasDone];
    const filteredState = hasDoneCopy.filter((p) => p.id !== id);
    await dispatch({ type: "REMOVER_JOB", payload: filteredState });
    toast.success("Successfully Deleted", { position: "top-right" });
  };
};
