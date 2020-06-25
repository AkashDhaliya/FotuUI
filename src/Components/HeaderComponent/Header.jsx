import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header>
      <nav>
        <div className="Container">
          <div className="app-header">
            <h1>FOTU</h1>
          </div>
          <ul>
            <li>
              <NavLink exact activeClassName="active" to="/chat">
                Message us
              </NavLink>
            </li>
            <li>
              <NavLink exact activeClassName="active" to="/random">
                Random
              </NavLink>
            </li>
            <li>
              <NavLink exact activeClassName="active" to="/search">
                Search
              </NavLink>
            </li>

            <li>
              <NavLink exact activeClassName="active" to="/">
                Home
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
