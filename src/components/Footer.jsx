import React from "react";

const Footer = () => {
  return (
    <footer className="app-footer">
      <div className="container foot-divs">
        <div className="logotxt">
          <img src="./images/logobig.png" alt="" className="logo-big" />
          <p className="txt">
            Replenish him third creature and meat <br />
            blessed void a fruit gathered you're, <br />
            they're two waters own morning <br />
            gathered greater.
          </p>
        </div>
        <div className="about side-grid">
          <h3 className="h">About Us</h3>
          <ul>
            <li className="lastP lit">Afficiated</li>
            <li className="lastP lit">Partners</li>
            <li className="lastP lit">Reviews</li>
            <li className="lastP lit">Blogs</li>
          </ul>
        </div>
        <div className="about side-grid">
          <h3 className="h">Popular class</h3>
          <ul>
            <li className="lastP lit">Creche</li>
            <li className="lastP lit">Primary</li>
            <li className="lastP lit">Secondary</li>
            <li className="lastP lit">Highschool</li>
          </ul>
        </div>
        <div className="about grid">
          <h3 className="h">Popular class</h3>
          <p className="lastP">sign up to newsletter to get latest updates</p>
          <div className="email-search">
            <div className="email">Enter Email Address</div>
            <div className="search">
              <img src="" alt="" />
            </div>
          </div>
          <img src="./images/Frame 2.png" alt="" />
        </div>
      </div>
      <div className="div">
        <div className="line"></div>
        <div className="p">
          <p className="lastP para">Copywright@2020DinnygreenInternational</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
