import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {

  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <nav className="navbar">
        <div className="container">
          <NavLink exact to="/" className="navbar__nav-logo">
            Portfolio
            <i className="fas fa-code"></i>
          </NavLink>

          <ul className={click ? "navbar__nav-menu active" : "navbar__nav-menu"}>
            <li className="navbar__nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="navbar__nav-links"
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
            <li className="navbar__nav-item">
              <NavLink
                exact
                to="/about"
                activeClassName="active"
                className="navbar__nav-links"
                onClick={handleClick}
              >
                About
              </NavLink>
            </li>
            <li className="navbar__nav-item">
              <NavLink
                exact
                to="/projects"
                activeClassName="active"
                className="navbar__nav-links"
                onClick={handleClick}
              >
                Projects
              </NavLink>
            </li>
            <li className="navbar__nav-item">
              <NavLink
                exact
                to="/contact"
                activeClassName="active"
                className="navbar__nav-links"
                onClick={handleClick}
              >
                Contact
              </NavLink>
            </li>
          </ul>
          <div className="navbar__nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
