import React, { Fragment } from "react";
import Job from "./doneList";
import { useSelector, useDispatch } from "react-redux";
import { remover } from "../Actions/hasDone";

const DoneJobs = () => {
  const hasDone = useSelector((state) => state.hasDone);
  const showListHandler = useSelector((state) => state.showListHandler);
  const dispatch = useDispatch();
  return (
    <Fragment>
      {showListHandler ? (
        <div>
          {hasDone.length != 0 ? (
            <h3 id="list-title" style={{ color: "#aacfcf" }}>
              Completed :
            </h3>
          ) : null}
          {hasDone.map((jobs) => (
            <Job
              key={jobs.id}
              name={jobs.name}
              delet={() => dispatch(remover(jobs.id))}
            ></Job>
          ))}
        </div>
      ) : null}
    </Fragment>
  );
};
export default DoneJobs;
