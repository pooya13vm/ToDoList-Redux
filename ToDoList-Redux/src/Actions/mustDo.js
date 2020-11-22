import { clearJobHolder } from "./newJob";
import { clearHolder } from "./valueHolder";
import { addToHasDone } from "./hasDone";
import { toast } from "react-toastify";

export const addNewItem = (newJob) => {
  return async (dispatch, getState) => {
    const mustDoCopy = [...getState().mustDo];
    if (newJob != "") {
      const item = {
        id: Math.floor(Math.random() * 500),
        name: newJob,
      };
      mustDoCopy.push(item);
      await dispatch({ type: "ADD_ITEM", payload: mustDoCopy });
      await dispatch(clearJobHolder());
    }
  };
};

export const editItem = (id) => {
  return async (dispatch, getState) => {
    if (getState().valueHolder != "") {
      const stateCopy = [...getState().mustDo];
      const indexNum = stateCopy.findIndex((p) => p.id === id);
      const job = stateCopy[indexNum];
      job.name = getState().valueHolder;
      stateCopy[indexNum] = job;
      await dispatch({ type: "EDIT_ITEM", payload: stateCopy });
      await dispatch(clearHolder());
      toast.success("Successfully edited", { position: "top-right" });
    } else {
      toast.error("For editing write something in the input box", {
        position: "top-right",
      });
    }
  };
};

export const mover = (id) => {
  return async (dispatch, getState) => {
    const mustDoCopy = [...getState().mustDo];
    const deletedItem = mustDoCopy.filter((p) => p.id !== id);
    const move = mustDoCopy.filter((p) => p.id === id);
    await dispatch({ type: "MOVER_JOB", payload: deletedItem });
    await dispatch(addToHasDone(move[0]));
    toast.success("YOU DID IT", { position: "top-right" });
  };
};
