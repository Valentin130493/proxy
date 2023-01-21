import React from "react";
import { Header } from "../header";
import { Outlet } from "react-router";
import { Footer } from "../footer";

import "./layout.css";

export const Layout = () => {
  return (
    <div className={"layout"}>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};
