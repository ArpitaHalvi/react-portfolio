import React from "react";
import Navbar from "./Navbar";
import Intro from "./Intro";
import Skills from "./Skills";
import Footer from "./Footer";
import About from "./About";

export default function Home() {
  return (
    <>
      <Navbar />
      <Intro />
      <About />
      <Skills />
      <Footer />
    </>
  );
}
