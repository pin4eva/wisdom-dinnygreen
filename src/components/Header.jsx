import React from "react";

const Header = () => {
  return (
    <header className="app-header">
      <div className="container top-nav">
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
        <nav className="container bottom-nav">
          <a href="#" className="logo">
            <img src="/logo.svg" alt="" />
          </a>

          <button className="btn d-md-none">
            <i class="ri-menu-line"></i>
          </button>
          <ul className="nav d-none d-md-flex">
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
              <a href="#" className="btn btn-primary">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
