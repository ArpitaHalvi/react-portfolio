import React from "react";
import { CiMenuFries } from "react-icons/ci";

export default function Navbar() {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="logo">
          <h2 className="icon">Arpita</h2>
        </div>
        <div className="navigation">
          <ul className="menus">
            <li>
              <a href="#">HOME</a>
            </li>
            <li>
              <a href="#about">ABOUT</a>
            </li>
            <li>
              <a href="#skills">SKILLS</a>
            </li>
            <li>
              <a href="#projects">PROJECTS</a>
            </li>
          </ul>
          <input type="checkbox" id="check" />
          <label className="menu-icon" htmlFor="check">
            <CiMenuFries className="icon" />
          </label>
        </div>
      </nav>
    </header>
  );
}
