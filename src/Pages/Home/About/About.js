import React from "react";
import "./About.css";
import person from "../../../assets/images/about_us/person.jpg";
import parts from "../../../assets/images/about_us/parts.jpg";
const About = () => {
  return (
    <div className=" mt-5 container">
      <div className="row justify-content-between d-flex align-items-center">
        <div className="col-md-6 position-relative">
          <img src={person} alt="" className="img-fluid rounded" />
          <img
            src={parts}
            alt=""
            className="img-fluid w-50 h-50 border border-5 position-absolute partsPosition"
          />
        </div>
        <div className="col-md-5">
          <p className="aboutDesign">About Us</p>
          <p className="aboutDesign2">
            We are qualified <br></br>& of experience in this field
          </p>
          <div className="mt-5"></div>
          <p className="aboutDesign3">
            There are many variations of passages of Lorem Ipsum<br></br>{" "}
            available, but the majority have suffered alteration in some
            <br></br> form, by injected humour, or randomised words which don't{" "}
            <br></br>
            look even slightly believable.{" "}
          </p>
          <div className="mt-4">
            <p className="aboutDesign3">
              the majority have suffered alteration in some form, by injected
              humour,<br></br> or randomised words which don't look even
              slightly <br></br>believable.{" "}
            </p>
          </div>
          <button className="btn btn-danger py-3 px-5">Get More Info</button>
        </div>
      </div>
    </div>
  );
};

export default About;
