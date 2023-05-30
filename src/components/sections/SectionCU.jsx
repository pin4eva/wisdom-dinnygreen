import React from "react";

const SectionCU = () => {
  return (
    <section className="contact">
      <div className="cont">
        <h1 className="h1-m fw-600">Contact Us</h1>
      </div>
      <div className="container grid ">
        <input type="text" name="" className="box para" placeholder="Name" />
        <input type="text" name="" className="box para" placeholder="Email" />
        <input type="text" name="" className="box para" placeholder="Subject" />
        <input type="text" name="" className="box para" placeholder="Search" />
        <input type="text" name="" className="message" placeholder="Message" />
      </div>{" "}
      <br />
      <button className="btn btn-primary btn-prop">send now</button>
      <br />
    </section>
  );
};

export default SectionCU;
