import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <div className="navigation">
        <ul>
          <NavLink to={"/"}>
            <li>Accueil</li>
          </NavLink>
          <NavLink to={"/About"}>
            <li>About</li>
          </NavLink>
          <NavLink to={"/Artiste"}>
            <li>Artiste</li>
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
