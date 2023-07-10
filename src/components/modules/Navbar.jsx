import React from "react";
import Footer from "./Footer";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-white py-2 shadow-sm">
        <div className="container">
          <NavLink className="navbar-brand fw-bold fs-1" to="/">
            StyleLab
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Главная
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/products">
                  Каталог
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  О нас
                </NavLink>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contacts">
                  Контакты
                </a>
              </li>
            </ul>
            <button
              type="button"
              className="btn btn-outline-dark btn-lg"
              id="sidebarCollapse"
            >
              <NavLink className="nav-link" to="/cart">
                <i className="fa fa-shopping-cart"></i> Корзина (0)
              </NavLink>
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
