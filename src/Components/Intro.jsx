import React from "react";
import intro from "../assets/girl-coder.png";

export default function Intro() {
  return (
    <section className="intro-section">
      <div className="greetings">
        <h1>
          Hello, I am <span>Arpita Halvi.</span>
        </h1>
        <p>
          It's great to see you here. I am an aspiring
          <span> Full Stack Web Developer.</span> I aim to deliver innovative
          impactful solutions that merge creativity and functionality.
        </p>
      </div>
      <div className="some-decor">
        <img src={intro} alt="ICONIC IMAGE" />
      </div>
    </section>
  );
}
