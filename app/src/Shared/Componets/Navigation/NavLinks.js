import React, { useContext } from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import { AuthContext } from "../../../Places/Context/auth-context";

import "./NavLinks.css";

const NavLinks = (props) => {
  const auth = useContext(AuthContext);
  return (
    <ul className="nav-links">
      <li>
        <NavLink to="/"> ALL USERS</NavLink>
      </li>
      {auth.isLoggedIn &&<li>
        <NavLink to="/u1/places">MY PLACES</NavLink>
      </li>}
      {auth.isLoggedIn && <li>
        <NavLink to="/places/new">ADD PLACES</NavLink>
      </li>}
      {!auth.isLoggedIn && <li>
        <NavLink to="/auth"> AUTHENTICATION</NavLink>
      </li>}
      {auth.isLoggedIn &&
      <button onClick={auth.logout}>LOGOUT</button>}
    </ul>
  );
};

export default NavLinks;
