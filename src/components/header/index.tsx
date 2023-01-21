import React from "react";

import "./header.css";
import { useLocation, useNavigate } from "react-router";
import { useAppSelector } from "../../store";

export const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useAppSelector((state) => state.user);

  const back = () => {
    if (location.pathname.includes("user")) {
      navigate(`/`);
    }
    if (location.pathname.includes("posts")) {
      navigate(`/user/${user.id}`);
    }
  };

  return (
    <div className={"header"}>
      {location.pathname !== "/" && (
        <button className={"header__back"} onClick={back}>
          back
        </button>
      )}
      {location.pathname === "/" && <p className={"header__p"}>Header</p>}
    </div>
  );
};
