import React from "react";
import { Link, NavLink } from "react-router-dom";
import headerLogo from "../../assets/images/headerlogo.png";

import "./Header.css"; // External CSS file for styles

const Header = () => {
  return (
    <div className="header-sticky-setting-main-div">
      <nav className="navbar navbar-expand-lg ">
        <div className="container-lg">
          <Link to={"/"} className="navbar-brand">
            <img width={"280px"} src={headerLogo} alt="" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars mobile-toggler-bars-icon"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav justify-content-between w-100">
              <li className="nav-item">
                <Link
                  to={"/"}
                  className="nav-link "
                  aria-current="page"
                  href="#"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  to={"/services"}
                  className="nav-link dropdown-toggle"
                  href="#"
                >
                  Services
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" href="#">
                      Action
                    </Link>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link to={"/product"} className="nav-link" href="#">
                  Products
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  to={"/portfolio"}
                  className="nav-link "
                  aria-current="page"
                  href="#"
                >
                  Portfolio
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to={"/jobs"}
                  className="nav-link "
                  aria-current="page"
                  href="#"
                >
                  Careers
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to={"about-us"}
                  className="nav-link "
                  aria-current="page"
                  href="#"
                >
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to={"/Blog"}
                  className="nav-link "
                  aria-current="page"
                  href="#"
                >
                  Blog
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to={"/content-us"}
                  className="nav-link "
                  aria-current="page"
                  href="#"
                >
                  Contact US
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
