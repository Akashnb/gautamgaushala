import React from "react";
import { Link, NavLink } from "react-router-dom";

import Logo from "../../../assets/image/site/logo-new.png";

const AppHeader = ({ MenuItems }) => (
  <header>
    <nav className="navbar navbar-dark navbar-expand-lg header">
      <div className="container p-0">
        <Link className="navbar-brand" to="/">
          <img src={Logo} alt="logo" className="header-logo" />
        </Link>
        <button
          className="navbar-toggler collapsed ml-auto mt-0"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div
          className="collapse navbar-collapse"
          style={{ width: "100%" }}
          id="navbarSupportedContent"
        >
          <ul className="nav navbar-nav ml-auto mobilemenu">
            {MenuItems.map(menuItem => (
              <li key={menuItem.id} className="nav-item">
                {/*active*/}
                <NavLink className="nav-link" exact to={menuItem.path}>
                  {menuItem.title}
                </NavLink>
              </li>
            ))}
            <li className="nav-item donate d-none d-lg-block">
              <Link to="/donate">દાન કરો</Link>
            </li>
            <li className="mob-donate d-sm-block d-lg-none">
              <Link className="nav-link" to="/donate">
                દાન કરો
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
);

export default AppHeader;
