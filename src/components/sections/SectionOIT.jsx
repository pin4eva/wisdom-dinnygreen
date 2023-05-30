import React from "react";

const SectionOIT = () => {
  return (
    <section className=" OIT">
      <h1 className="h1-m fw-600">Our Instructors & Teachers</h1>
      <p>
        we have the best teachers and instructors that would be able to train
        you kids, making them Creative, God fearing, Respectful and intelligent
      </p>
      <div className=" container pics ">
        <div className="pic-holder1">
          <div className="linear-grad">
            <div className="obj-holder">
              <button className="btn btn-info">Full time</button>
              <p className="txt1">Masters in Biology</p>
              <p className="txt2">
                <span>
                  <img src="./images/white date.png" alt="" />
                </span>
                28th April 2021
              </p>
            </div>
          </div>
        </div>
        <div className="pic-holder2">
          <div className="linear-grad">
            <div className="obj-holder">
              <button className="btn btn-info">Full time</button>
              <p className="txt1">
                Doctor appointments have the <br />
                diagnose
              </p>
              <p className="txt2">
                <span>
                  <img src="./images/white date.png" alt="" />
                </span>
                28th April 2021
              </p>
            </div>
          </div>
        </div>
        <div className="pic-holder3">
          <div className="linear-grad">
            <div className="obj-holder">
              <button className="btn btn-info">Full time</button>
              <p className="txt1">
                Doctor appointments have the <br />
                diagnose
              </p>
              <p className="txt2">
                <span>
                  <img src="./images/white date.png" alt="" />
                </span>
                28th April 2021
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="btn-holder">
        <button className="btn btn-primary btn-prop ">see all</button>
      </div>
    </section>
  );
};

export default SectionOIT;
