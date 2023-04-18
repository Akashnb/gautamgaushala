import React from "react";
import { Link, NavLink } from "react-router-dom";

import Logo from "../../../assets/image/logo-new.png";
import { MenuItems } from "../../data/MenuItems.js";
import routes from "../../../Routes";
import i18n from "i18next";

import { useTranslation } from 'react-i18next';
const AppHeader = () => {

  const [t] = useTranslation();

  const handleLanguageChange = (e) => {
    i18n.changeLanguage(e.target.value);
  }

  return <header>
    <nav className="navbar navbar-dark navbar-expand-lg header">
      <div className="container p-0">
        <Link className="navbar-brand" to={routes.DASHBOARD}>
          <img src={Logo} alt="gauttamgaushala-logo" className="header-logo" />
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
                <NavLink className="nav-link" exact to={menuItem.path}>
                  {menuItem.title}
                </NavLink>
              </li>
            ))}
            <li className="nav-item donate d-none d-lg-block">
              <Link to={routes.DONATE}>{t("Donate")}</Link>
            </li>

            {/* <button onClick={handleLanguageChange}>Hd</button> */}
            <li className="mob-donate d-sm-block d-lg-none">
              <Link className="nav-link" to={routes.DONATE}>
                દાન કરો
              </Link>
            </li>
          </ul>
        </div>
        <div style={{width:"10rem"}}>
        <select value={i18n.language} onChange={handleLanguageChange} className="form-control">
              <option value="guj">Gujarati</option>
              <option value="hin">Hindi</option>
              <option value="en">English</option>
          </select>
        </div>
      </div>
    </nav>
  </header>
};

export default AppHeader;
