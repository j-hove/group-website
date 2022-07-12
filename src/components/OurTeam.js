import React from "react";
import "./OurTeam.css";
import TeamInfo from "./subcomponents/TeamInfo";

function OurTeam() {
  const team = ["Emanon", "Hazel", "Jhoven"]
  return (
    <div class="container p-4">
      <div class="row">
        <TeamInfo name={team[0]} />
        <TeamInfo name={team[1]} />
        <TeamInfo name={team[2]} />
      </div>
    </div>
  );
}
export default OurTeam;
