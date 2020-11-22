import React, { Fragment } from "react";
import Activity from "./mustdoList";
import { useSelector, useDispatch } from "react-redux";
import { mover, editItem } from "./../Actions/mustDo";
import { setHolder } from "./../Actions/valueHolder";

const MustDo = () => {
  const mustDo = useSelector((state) => state.mustDo);
  const valueHolder = useSelector((state) => state.valueHolder);
  const showListHandler = useSelector((state) => state.showListHandler);
  const dispatch = useDispatch();
  return (
    <Fragment>
      {showListHandler ? (
        <div>
          {mustDo.length != 0 ? (
            <h3 id="list-title" style={{ color: "#d291bc" }}>
              Not Completed :
            </h3>
          ) : null}
          {mustDo.map((act) => (
            <Activity
              key={act.id}
              name={act.name}
              valueHolder={valueHolder}
              deleter={() => dispatch(mover(act.id))}
              changed={(event) => dispatch(setHolder(event))}
              editItem={() => dispatch(editItem(act.id))}
            ></Activity>
          ))}
        </div>
      ) : null}
    </Fragment>
  );
};

export default MustDo;
