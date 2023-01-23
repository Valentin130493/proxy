import React from "react";
import { useLocation } from "react-router";

import "./error.css";

export const Error = () => {
  const location = useLocation();

  return (
    <div className={"error"}>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
    </div>
  );
};
