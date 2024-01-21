import React from "react";
import { Fragment } from "react";
import { Header } from "./components/Header";
import { Login } from "./pages/login";

export const App = () => {
  return (
    <Fragment>
      <Header />
      <Login />
    </Fragment>
  );
};
