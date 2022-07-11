import React from "react";
import styles from "./OurTeam.css"

function OurTeam(props) {
  return (
    <div class="container p-4">
      <div class="row">
        <div class="heading-title text-center">
          <h3 class="text-uppercase">Our Team</h3>
          <p class="p-top-30 half-txt">The secret to a successful business is to value its people. Successful business comes when your people are productive. What makes them productive? It’s when you treat them like a family and value them not just a mere employees. Meet our team:</p>
        </div>

        <div class="col-md-4 col-sm-4">
          <div class="team-member">
            <div class="team-img">
              <img src="https://image.freepik.com/free-photo/elegant-man-with-thumbs-up_1149-1595.jpg" alt="team member" class="img-responsive" />
            </div>
            <div class="team-hover">
              <div class="desk">
                  <h4>Hi There !</h4>
                  <p>I love to introduce myself as a hardcore Web Designer.</p>
              </div>
            </div>
          </div>
          <div class="team-title">
            <h5>{props.name[0]}</h5>
            <span>founder & ceo</span>
          </div>
        </div>
        <div class="col-md-4 col-sm-4">
          <div class="team-member">
            <div class="team-img">
                <img src="https://image.freepik.com/free-photo/elegant-man-with-thumbs-up_1149-1595.jpg" alt="team member" class="img-responsive" />
            </div>
            <div class="team-hover">
              <div class="desk">
                <h4>Hello World</h4>
                <p>I love to introduce myself as a hardcore Web Designer.</p>
              </div>
            </div>
          </div>
          <div class="team-title">
            <h5>{props.name[1]}</h5>
            <span>HR Manager</span>
          </div>
        </div>
        <div class="col-md-4 col-sm-4">
          <div class="team-member">
            <div class="team-img">
                <img src={"https://image.freepik.com/free-photo/elegant-man-with-thumbs-up_1149-1595.jpg"} alt="team member" class="img-responsive" />
            </div>
            <div class="team-hover">
              <div class="desk">
                <h4>I love to design</h4>
                <p>I love to introduce myself as a hardcore Web Designer.</p>
              </div>
            </div>
          </div>
          <div class="team-title">
            <h5>{props.name[2]}</h5>
            <span>Marketing Manager</span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default OurTeam
