import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <div className="navigation">
        <ul>
          <NavLink
            to={"/"}
            className={(nav) => (nav.isActive ? "nav-active" : "")}>
            <li>Accueil</li>
          </NavLink>
          <NavLink
            to={"/About"}
            className={(nav) => (nav.isActive ? "nav-active" : "")}>
            <li>About</li>
          </NavLink>
          <NavLink
            to={"/Artiste"}
            className={(nav) => (nav.isActive ? "nav-active" : "")}>
            <li>Artiste</li>
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
