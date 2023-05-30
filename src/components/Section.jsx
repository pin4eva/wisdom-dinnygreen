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
      {/* ------------------------------end of section1: GYC ----------------------------- */}

      {/*---------------------------- SECTION2: ALS -----------------------------------------*/}
      <div className="container section2">
        <div class="cir-cont">
          <div className="holder">
            <img src="./images/Mask Group.png" alt="" class="mask-r" />

            <div class="dinny_trans">
              <img class="dinny-pic" src="./images/dinny7_n.png" alt="dinny" />
              <img src="./images/Rectangle 12.png" alt="" class="small-trans" />
            </div>
          </div>
        </div>
        <div className="txt">
          <div className="txt-holder"></div>
          <h1 className="h1-m fw-600">
            Advance Learning System Around The World
          </h1>
          <p>
            we have not made a collaborative effort in bringing together
            scientific expertise from other countries, steered jointly by their
            governments on the basis of shared policy-driven interests.
          </p>
          <div className="amt-detail">
            <div className="amt">
              <h1 className="h1-m fw-600">
                25K<sup>+</sup>
              </h1>
              <p>Teachers</p>
            </div>
            <div className="amt">
              <h1 className="h1-m fw-600">
                74K<sup>+</sup>
              </h1>
              <p>Active Courses</p>
            </div>
            <div className="amt">
              <h1 className="h1-m fw-600">250</h1>
              <p>Extra Curricular</p>
            </div>
          </div>
          <div className="ALS-btn">
            <button className="btn btn-primary btn-prop">Learn more</button>
          </div>
        </div>
      </div>

      {/*  ------------------------------end of section1: GYC ----------------------------- */}
    </section>
  );
};

export default Section;
