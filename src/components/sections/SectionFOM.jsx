/* eslint-disable react/style-prop-object */
import React from "react";

const SectionFOM = () => {
  return (
    <section className="  section4">
      <div className="main-container">
        <h1 className="h1-m fw-600">
          Find Out More About Our Learning Experience
        </h1>

        <p>
          We have built hospitals, arranged doctor appointments have the
          diagnose and treat your Lorem ipsum dolor sit amet consectetur
          adipisicing elit.
        </p>

        <ul className="list">
          <li>
            <span className="pad">
              <img src="./images/Group 34.png" alt="" />
            </span>
            Culture in diversitys
          </li>
          <li>
            <span className="pad">
              <img src="./images/Group 34.png" alt="" />{" "}
            </span>
            We have built hospitals arranged doctor
          </li>
          <li>
            <span style={{ paddingRight: 10 + "px" }}>
              <img src="./images/Group 34.png" alt="" />
            </span>{" "}
            We have built hospitals arranged doctor
          </li>
        </ul>

        <button className="btn btn-primary btn-prop ">Learn more</button>
      </div>
      <div className="image-fluid bg-pic-container">
        <div className="transparent">
          <img className="img" src="./images/Mask Group (2).png" alt="" />
        </div>
      </div>
    </section>
  );
};

export default SectionFOM;
