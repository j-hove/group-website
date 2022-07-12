import React from "react";

function TeamInfo(props) {
  return (
    <>
      <>
        <div class="col-md-4 col-sm-4">
          <div class="team-member">
            <div class="team-img">
              <img src="https://image.freepik.com/free-photo/elegant-man-with-thumbs-up_1149-1595.jpg" alt="team member" class="img-responsive" />
            </div>
            <div class="team-hover">
              <div class="desk">
                <h4>Brogrammer</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dignissim sodales ut eu sem integer vitae justo eget
                  magna.
                </p>
              </div>
            </div>
          </div>
          <div class="team-title">
            <h5>{props.name}</h5>
            <span>Full Stack Developer</span>
          </div>
        </div>
      </>
    </>
  );
}
export default TeamInfo;
