import React from "react";

const SectionFOH = () => {
  return (
    <section className="container FOH">
      <div className="header-txt">
        <h1 className="h1-m fw-600">Find Out How We Help Students</h1>
        <br />
        <p>
          authentic 'voice and choice' mater and a big part of this is leaving
          room for interpretation' in the assignment. those gray areas can
          confuse students unaccustomed to agency and choice, but once they
          become comfortable with it, it can be a significant factor in helping
          them show what their 'best' actually is.
        </p>
      </div>
      <div className="trans">
        <img src="./images/mask right.png" alt="" className="grp-circle-r" />
        <img src="./images/mask left.png" alt="" className="group-circle-l" />
        <div className="bp-holder">
          <div className="bckg-pic">
            <div className="caicu">
              {/* <!--  <img src="./images/circle.png" alt="" className="caicu" /> --> */}
              <div className="play">
                <img src="./images/play.png" alt="" className="play-btn" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionFOH;
