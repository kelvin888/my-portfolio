import React, { FC } from "react";
import kelvinHood from "../assets/img/kelv-passport.png";

const SiteHeader: FC = () => {
  const scrollToNode = (offset: number) => {
    window.scrollTo({ top: offset, left: 0, behavior: "smooth" });

    // let node = document.querySelector(`#${nodeId}-section`);
    // console.log("node", node);
    // node.scrollIntoView({
    //   behavior: "smooth",
    //   block: "start",
    //   inline: "start",
    // });
  };
  return (
    <header className="left float-left shadow-dark" id="header">
      <button type="button" className="close" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
      <div className="header-inner d-flex align-items-start flex-column">
        <a href="index.html">
          <img
            src={kelvinHood}
            style={{ borderRadius: "50%", width: "129px" }}
            alt="Kelvin Orhungul"
          />
        </a>
        <a href="index.html" className="site-title dot mt-3">
          Kelvin Orhungul
        </a>
        <span className="site-slogan">Web Developer</span>

        {/* <!-- navigation menu --> */}
        <nav>
          <ul className="vertical-menu scrollspy">
            <li>
              <span
                id="home"
                onClick={() => scrollToNode(50)}
                className="active"
              >
                <i className="icon-home"></i>Home
              </span>
            </li>
            <li>
              <span id="about" onClick={() => scrollToNode(400)}>
                <i className="icon-user"></i>About
              </span>
            </li>
            <li>
              <span id="services" onClick={() => scrollToNode(600)}>
                <i className="icon-bulb"></i>Services
              </span>
            </li>
            <li>
              <span id="resume" onClick={() => scrollToNode(800)}>
                <i className="icon-graduation"></i>Resume
              </span>
            </li>
            <li>
              <span id="works" onClick={() => scrollToNode(1000)}>
                <i className="icon-grid"></i>Works
              </span>
            </li>
            <li>
              <span id="blog" onClick={() => scrollToNode(1200)}>
                <i className="icon-pencil"></i>Blog
              </span>
            </li>
            <li>
              <span id="contact" onClick={() => scrollToNode(1400)}>
                <i className="icon-phone"></i>Contact
              </span>
            </li>
          </ul>
        </nav>

        {/* <!-- footer --> */}
        <div className="footer mt-auto">
          {/* <!-- social icons --> */}
          <ul className="social-icons list-inline">
            <li className="list-inline-item">
              <a href="#" aria-label="facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#" aria-label="twitter">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#" aria-label="instagram">
                <i className="fab fa-instagram"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#" aria-label="youtube">
                <i className="fab fa-youtube"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#" aria-label="dribble">
                <i className="fab fa-dribbble"></i>
              </a>
            </li>
          </ul>

          {/* <!-- copyright --> */}
          <span className="copyright">© 2020 Bako Template</span>
        </div>
      </div>
    </header>
  );
};

export default SiteHeader;
