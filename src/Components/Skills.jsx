import React from "react";
import { DiJavascript1, DiMongodb } from "react-icons/di";
import {
  FaBootstrap,
  FaCss3,
  FaGithub,
  FaHtml5,
  FaJava,
  FaNodeJs,
  FaPhp,
  FaPython,
  FaReact,
  FaSass,
} from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { SiExpress } from "react-icons/si";
import { TbBrandCpp } from "react-icons/tb";

export default function Skills() {
  return (
    <section className="skills-section" id="skills">
      <h1>SKILLS</h1>
      <div className="skills-sec">
        <div className="skills">
          <h2>Front-end</h2>
          <div className="skill-names">
            <div className="skill-name">
              HTML5
              <FaHtml5 className="skill-icon" />
            </div>
            <div className="skill-name">
              CSS3
              <FaCss3 className="skill-icon" />
            </div>
            <div className="skill-name">
              Sass
              <FaSass className="skill-icon" />
            </div>
            <div className="skill-name">
              react js
              <FaReact className="skill-icon" />
            </div>
            <div className="skill-name">
              Bootstrap
              <FaBootstrap className="skill-icon" />
            </div>
            <div className="skill-name">
              JavaScript
              <DiJavascript1 className="skill-icon" />
            </div>
          </div>
        </div>
        <div className="skills">
          <h2>Back-end</h2>
          <div className="skill-names">
            <div className="skill-name">
              Node.js
              <FaNodeJs className="skill-icon" />
            </div>
            <div className="skill-name">
              Express.js
              <SiExpress className="skill-icon" />
            </div>
            <div className="skill-name">
              Php
              <FaPhp className="skill-icon" />
            </div>
          </div>
        </div>
        <div className="skills">
          <h2>Databases</h2>
          <div className="skill-names">
            <div className="skill-name">
              MySQL
              <GrMysql className="skill-icon" />
            </div>
            <div className="skill-name">
              MongoDB
              <DiMongodb className="skill-icon" />
            </div>
          </div>
        </div>
        <div className="skills">
          <h2>Additional skills</h2>
          <div className="skill-names">
            <div className="skill-name">
              C++
              <TbBrandCpp className="skill-icon" />
            </div>
            <div className="skill-name">
              Java
              <FaJava className="skill-icon" />
            </div>
            <div className="skill-name">
              Python
              <FaPython className="skill-icon" />
            </div>
            <div className="skill-name">
              Github
              <FaGithub className="skill-icon" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
