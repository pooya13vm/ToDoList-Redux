import React, { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setJobHolder } from "./../Actions/newJob";
import { addNewItem } from "./../Actions/mustDo";
import { btnToggler } from "./../Actions/showList";

const Header = () => {
  const dispatch = useDispatch();
  const newJob = useSelector((state) => state.newJob);
  const mustDo = useSelector((state) => state.mustDo);
  const hasDone = useSelector((state) => state.hasDone);
  const showListHandler = useSelector((state) => state.showListHandler);
  return (
    <Fragment>
      <div className="title">
        <h1>To Do List</h1>
      </div>

      <div className="container">
        <form className="inputField">
          <input
            className="new-input"
            type="text"
            value={newJob}
            onChange={(value) => dispatch(setJobHolder(value))}
            required
          />
          <label className="iner-text">Enter a new activity</label>
          <input
            type="checkbox"
            id="check"
            onChange={() => dispatch(addNewItem(newJob))}
          />
          <label for="check" className="bottom"></label>
        </form>
        <div className="planning-info">
          <p>
            Not Done Yet :{" "}
            <samp className="badge badge-info badge-pill">{`${mustDo.length}`}</samp>
          </p>
          <p>
            Has Been Done :{" "}
            <span className="badge badge-danger badge-pill">{`${hasDone.length}`}</span>
          </p>
          <button
            className="btn"
            onClick={() => dispatch(btnToggler(showListHandler))}
          >
            {showListHandler ? "HIDE LIST" : "SHOW LIST"}
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default Header;
