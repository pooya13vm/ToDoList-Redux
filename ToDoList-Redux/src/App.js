import React, { Fragment } from "react";
import Header from "./components/header";
import MustDo from "./components/mustdoCtrl";
import DoneJobs from "./components/doneCtrl";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <Fragment>
      <Fragment>
        <Header />
        <MustDo />
        <DoneJobs />
        <ToastContainer />
      </Fragment>
    </Fragment>
  );
};

export default App;
