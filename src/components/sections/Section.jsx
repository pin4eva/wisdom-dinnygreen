/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const Section = () => {
  return (
    <section className="app-section">
      <div className="section1-top">
        <div className="container top-contents">
          <div className="h1-holder">
            <h1 className="h1-x fw-700">
              Give Your Child A Chance To Be Unique
            </h1>
          </div>
          <div className="txt-p">
            <p>
              Experts agrees that a child's personality doesn't fully form until
              they are in elementary school.
            </p>
            <p>
              <a href="#" className="text-primary">
                Sign in
              </a>{" "}
              to enroll your child
            </p>
          </div>
          <div className="buttons">
            <button className="btn btn-primary btn-prop">Sign up</button>
            <button className="btn btn-info btn-prop">Learn more</button>
          </div>
        </div>
        <div className="section1-bottom"></div>
      </div>
    </section>
  );
};

export default Section;
