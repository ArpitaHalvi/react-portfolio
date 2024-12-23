import { useState } from "react";
import { CgClose } from "react-icons/cg";
import { CiMenuFries } from "react-icons/ci";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className="header">
      <nav className="navbar">
        <div className="logo">
          <h2 className="icon">Arpita</h2>
        </div>
        <div className="navigation">
          <ul className={`menus ${isOpen ? "open" : ""}`}>
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
          <div className="menu-icon" htmlFor="check" onClick={toggleMenu}>
            {isOpen ? (
              <CgClose className="icon" />
            ) : (
              <CiMenuFries className="icon" />
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}
