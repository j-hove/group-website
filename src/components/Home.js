import React from "react";
import homeIcon from "./Home.svg"

function Home() {
  return (
    <section className="bg-dark text-light p-5 p-lg-0 p-lg-5 text-center text-sm-start" id="home">
        <div className="container py-5">
          <div className="d-sm-flex align-items-center justify-content-between">
            <div>
              <h1>
                Hi! Welcome to Bro<span className="text-warning">grammer</span> 
              </h1>
              <p className="lead my-4">
                Your one-stop online and web development business solutions.
              </p>
              <button className="btn btn-primary btn-lg">
                View Projects
              </button>
              <button className="btn btn-outline-primary btn-lg mx-3">
                Contact Us
              </button>
            </div>
            <img 
              className="img-fluid w-50 d-none d-sm-block"
              src={homeIcon}
              alt="group-of-developers-discussing"
            />
          </div>
        </div>
      </section>
  );
}
export default Home;
