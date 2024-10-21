import React from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { GrMail } from "react-icons/gr";

export default function Footer() {
  return (
    <footer className="footer" id="projects">
      <div className="social-handles">
        <a
          href="https://github.com/ArpitaHalvi"
          data-social="GitHub"
          style={{ "--accent-color": "black" }}
        >
          <FaGithub className="social-icon" />
        </a>
        <a
          href="https://www.linkedin.com/in/arpita-halvi-488990251/"
          data-social="LinkedIn"
          style={{ "--accent-color": "#0A66C2" }}
        >
          <FaLinkedin className="social-icon" />
        </a>
        <a
          href="mailto:arpitahalvi@gmail.com"
          data-social="Gmail"
          style={{ "--accent-color": "#f11515" }}
        >
          <GrMail className="social-icon" />
        </a>
        <a
          href="https://www.instagram.com/cingoodvibes/?hl=en"
          data-social="Instagram"
          style={{ "--accent-color": "#E4405F" }}
        >
          <FaInstagram className="social-icon" />
        </a>
      </div>
      <div className="copyright">
        <p>&copy; 2024 All Rights Reserved.</p>
      </div>
    </footer>
  );
}
