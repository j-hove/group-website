import React from "react";
import aboutImg from "./About.svg"

function About() {
  return (
    <div className="container p-4" id="about">
      <div className="row">
        <section id="learn" className="p-5">
          <div className="container">
            <div className="row align-items-center justify-content-between">
            <div className="col-md p-5">
              <h2 className="text-info">About Us</h2>
                <p className="lead">
                  Brogrammer came from the portmanteau of the words "Brother" and "Programmer". Brother in this term does not necessarily only refers to a male but refers to the essence of kinship or brotherhood.
                </p>
                <p className="lead">
                Thus a brotherhood of programmers with a dedicated goal of providing the best services for our clients and the best result for our projects.
                </p>
              </div>
              <div className="col-md">
                <img 
                  className="img-fluid d-none d-md-block"
                  src={aboutImg}
                  alt="team-coding"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
export default About;
