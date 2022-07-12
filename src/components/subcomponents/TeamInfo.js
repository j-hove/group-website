import React from "react";

function TeamInfo(props) {
  return (
    <>
      <>
        <div className="col-md-4 col-sm-4">
          <div className="team-member">
            <div className="team-img">
              <img src="https://image.freepik.com/free-photo/elegant-man-with-thumbs-up_1149-1595.jpg" alt="team member" className="img-responsive" />
            </div>
            <div className="team-hover">
              <div className="desk">
                <h4>Brogrammer</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dignissim sodales ut eu sem integer vitae justo eget
                  magna.
                </p>
              </div>
            </div>
          </div>
          <div className="py-3">
            <h5 className="text-info">{props.name}</h5>
            <span className="text-warning">Full Stack Developer</span>
          </div>
        </div>
      </>
    </>
  );
}
export default TeamInfo;
