/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";

const Header = () => {
  // eslint-disable-next-line no-undef
  const [open, setOpen] = useState(false);

  return (
    <header className="app-header">
      <div className="container top-nav d-none d-sm-flex">
        <div className="top-nav-left">
          <p>
            <span className="fw-600">call:</span> +234 9012624162{" "}
          </p>
          <p>
            <span className="fw-600">Support:</span> info@yourcompany.com
          </p>
        </div>
        <div className="top-nav-right">
          <button className="btn text-primary">Login</button>
          <button className="btn btn-primary">Register</button>
        </div>
      </div>
      <div className="bg-dark-green py-1 ">
        <nav
          className={
            open ? "container bottom-nav expanded" : "container bottom-nav"
          }
        >
          <a href="#" className="logo">
            <img src="/logo.svg" alt="" />
          </a>

          <button className="d-md-none  btn" onClick={() => setOpen(!open)}>
            {open ? (
              <i className="ri-close-fill"></i>
            ) : (
              <i className="ri-menu-line"></i>
            )}
          </button>

          <ul className={open ? "nav d-flex" : "nav d-md-flex d-none"}>
            <li className="nav-item">
              <a href="#" className="nav-link active">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link ">
                About
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                Instructors
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                Course
              </a>
            </li>

            <li className="nav-item">
              <a href="#" className="nav-link">
                Blog
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="btn btn-primary btn-prop">
                Contacts
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
