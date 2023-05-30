import React from "react";

const SectionPOP = () => {
  return (
    <section className=" pop">
      <div className=" container header-txt">
        <h1 className="h1-m fw-600">Popular class</h1>
        <br />
        <p>
          We have built hospitals, arranged doctor appointments have the
          diagnose and treat yourem ipsu r aol ad meniam, quis nostrud
          exercitation
        </p>
        <br />
      </div>
      <div className=" sections-holder ">
        <div className="div">
          <div className="sections">
            <div className="level">
              <img
                className="image-fluid pishur"
                src="./images/man.png"
                alt="man"
              />
              <br />
              <br />
              <p className="light-txt">
                <span>
                  <img src="./images/lessons.png" alt="lesson" />
                </span>
                35 Lessons
                <span className="pad-l">
                  <img src="./images/date.png" alt="date" />
                </span>
                28th April 2021
              </p>
              <p className="lvl-txt">Creche</p>
              <p className="light-txt">
                For anyone validating framer as a <br />
                professional prototyping tool
              </p>
            </div>
          </div>
          <button className="enroll-white">
            Enroll Now
            <img src="./images/arrow.png" alt="arrow" className="black" />
            <img src="./images/white arrow.png" alt="arrow" className="white" />
          </button>
        </div>
        <div className="div">
          <div className="sections">
            <div className="level">
              <img className="pishur" src="./images/blonde.png" alt="" />
              <p className="light-txt">
                <span>
                  <img src="./images/lessons.png" alt="lesson" />
                </span>
                35 Lessons
                <span className="pad-l">
                  <img src="./images/date.png" alt="date" />
                </span>
                28th April 2021
              </p>
              <p className="lvl-txt">Creche</p>
              <p className="light-txt">
                For anyone validating framer as a <br />
                professional prototyping tool
              </p>
            </div>
          </div>
          <button className="enroll-white">
            Enroll Now
            <img src="./images/arrow.png" alt="arrow" className="black" />
            <img src="./images/white arrow.png" alt="arrow" className="white" />
          </button>
        </div>
        <div className="div">
          <div className="sections">
            <div className="level">
              <img className="pishur" src="./images/choco.png" alt="" />
              <p className="light-txt">
                <span>
                  <img src="./images/lessons.png" alt="lesson" />
                </span>
                35 Lessons
                <span className="pad-l">
                  {" "}
                  <img src="./images/date.png" alt="date" />
                </span>
                28th April 2021
              </p>
              <p className="lvl-txt">Creche</p>
              <p className="light-txt">
                For anyone validating framer as a <br />
                professional prototyping tool
              </p>
            </div>
          </div>
          <button className="enroll-white">
            Enroll Now
            <img src="./images/arrow.png" alt="arrow" className="black" />
            <img src="./images/white arrow.png" alt="arrow" className="white" />
          </button>
        </div>
      </div>
      <div className="button">
        <button className="btn btn-primary btn-prop ">view all courses</button>
      </div>
    </section>
  );
};

export default SectionPOP;
