import React from "react";
import image from "../assets/projects/ecommerce.svg"
import "./ProjectInfo.css"

function ProjectInfo(props) {
  return (
    <div className="col-md-6 col-lg-4 card bg-dark text-white p-3 my-3">
      <img src={image} className="card-img" alt="..." />
      <div className="card-img-overlay">
          <h5 className="card-title">{props.projectName}</h5>
          <p className="card-text">{props.projectDescription}</p>
      </div>
    </div>
  );
}
export default ProjectInfo;
