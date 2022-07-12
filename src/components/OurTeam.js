import React from "react";
import "./OurTeam.css";
import TeamInfo from "./subcomponents/TeamInfo";

function OurTeam() {
  const team = ["Emanon", "Hazel", "Jhoven"]
  return (
    <section id="ourteam" className="p-5 bg-dark">
      <div className="container">
        <h2 className="text-center text-info">Our Team</h2>
        <p className="lead text-center text-white mb-5">
          The secret to a successful business is to value its people. Successful business comes when your people are productive. What makes them productive? It’s when you treat them like a family and value them not just a mere employees.<br/> Meet our fellow <span className="text-info">Bro</span><span className="text-warning">grammers:</span>
        </p>
        <div className="row g-4">
          <TeamInfo name={team[0]} />
          <TeamInfo name={team[1]} />
          <TeamInfo name={team[2]} />          
        </div>
      </div>
    </section>


    // <div className="container p-4" id="ourteam">
    //   <div className="row">
    //     <div className="heading-title text-center pt-4">
    //       <h3 className="text-uppercase">Our Team</h3>
    //       <h4 className="pt-4 lead">The secret to a successful business is to value its people. Successful business comes when your people are productive. What makes them productive? It’s when you treat them like a family and value them not just a mere employees.<br/> Meet our fellow bro<span className="text-warning">grammers:</span></h4>
    //     </div>
    //     <TeamInfo name={team[0]} />
    //     <TeamInfo name={team[1]} />
    //     <TeamInfo name={team[2]} />
    //   </div>
    // </div>
  );
}
export default OurTeam;
