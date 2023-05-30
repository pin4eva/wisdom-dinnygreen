import React from "react";

const SectionALS = () => {
  return (
    <section className="container section2">
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
    </section>
  );
};

export default SectionALS;
