import { FaExternalLinkAlt } from "react-icons/fa";
import { projects } from "../../projects";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function Projects() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slideToShow: 1,
    slideToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
  };
  return (
    <section className="project-section" id="projects">
      <h2>PROJECTS</h2>
      <Slider {...settings}>
        {projects.map((p) => {
          return (
            <div className="project" key={p.id}>
              <div className="head"></div>
              <h3 className="title">{p.title}</h3>
              <p className="desc">
                {p.desc}
                {!p.title ? (
                  ""
                ) : (
                  <a href="https://github.com/ArpitaHalvi/react-landing-page">
                    <FaExternalLinkAlt />
                  </a>
                )}
              </p>
            </div>
          );
        })}
      </Slider>
    </section>
  );
}
