import React from "react";
import Links from "./Links.js"
import user from "../data/user"

function About({bio}) {
  return (
    <div id="about">
      <h2>About Me</h2>
      {bio ? <p>{bio}</p> : null}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      {/* add your <Links /> component here */}
      <Links 
        github={user.links.github}
        linkedin={user.links.linkedin}
       />
    </div>
  );
}

export default About;
