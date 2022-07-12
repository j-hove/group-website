import React from "react";
import ProjectInfo from "./subcomponents/ProjectInfo";

function Projects() {
  return (
    <section id="projects" class="p-5 bg-info">
      <div class="container">
        <h2 class="text-center text-white">Our Projects</h2>
        <p class="lead text-center text-white mb-5">
          These are some of the projects we've made:
        </p>
        <div class="row g-3">          
          <ProjectInfo projectName="E-Commerce Website" projectDescription="This fully navigable and mobile-responsive frontend template for an eCommerce Website was developed using React JS and customized using Styled Components."/>
          <ProjectInfo projectName="E-Commerce Website" projectDescription="This fully navigable and mobile-responsive frontend template for an eCommerce Website was developed using React JS and customized using Styled Components."/>
          <ProjectInfo projectName="E-Commerce Website" projectDescription="This fully navigable and mobile-responsive frontend template for an eCommerce Website was developed using React JS and customized using Styled Components."/>
          <ProjectInfo projectName="E-Commerce Website" projectDescription="This fully navigable and mobile-responsive frontend template for an eCommerce Website was developed using React JS and customized using Styled Components."/>
          <ProjectInfo projectName="E-Commerce Website" projectDescription="This fully navigable and mobile-responsive frontend template for an eCommerce Website was developed using React JS and customized using Styled Components."/>
          <ProjectInfo projectName="E-Commerce Website" projectDescription="This fully navigable and mobile-responsive frontend template for an eCommerce Website was developed using React JS and customized using Styled Components."/>
        </div>
      </div>
    </section>
  );
}
export default Projects;
