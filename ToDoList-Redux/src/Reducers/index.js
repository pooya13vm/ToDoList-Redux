import { combineReducers } from "redux";
import { MustDoReducer } from "./mustDoReducer";
import { HasDoneReducer } from "./hasDoneReducer";
import { NewJobReducer } from "./newJobReducer";
import { ValueHolderReducer } from "./valueHolderReducer";
import { ShowListReducer } from "./showListHandlerReducer";
export const Reduce = combineReducers({
  mustDo: MustDoReducer,
  hasDone: HasDoneReducer,
  newJob: NewJobReducer,
  valueHolder: ValueHolderReducer,
  showListHandler: ShowListReducer,
});
