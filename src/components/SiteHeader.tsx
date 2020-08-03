import React, { FC, useState } from "react";
import kelvinHood from "../assets/img/kelv-face.png";
import { closeMobileSidebar, scrollToNode } from "../utils/functions";

const SiteHeader: FC = () => {
  const [activeLink, setActiveLink] = useState("home");
  const handleSidebarClick = (link: string, nodePosition: number) => {
    closeMobileSidebar();
    scrollToNode(nodePosition);
    setActiveLink(link);
  };
  return (
    <header className="left float-left shadow-dark" id="header">
      <button type="button" className="close" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
      <div className="header-inner d-flex align-items-start flex-column">
        <a href="/">
          <img
            src={kelvinHood}
            style={{ borderRadius: "50%", width: "129px" }}
            alt="Kelvin Orhungul"
          />
        </a>
        <a href="/" className="site-title dot mt-3">
          Kelvin Orhungul
        </a>
        <span className="site-slogan">Web Developer</span>

        {/* <!-- navigation menu --> */}
        <nav>
          <ul className="vertical-menu scrollspy">
            <li>
              <span
                id="home"
                onClick={() => {
                  handleSidebarClick("home", 0);
                }}
                className={activeLink === "home" ? "active" : ""}
              >
                <i className="icon-home"></i>Home
              </span>
            </li>
            <li>
              <span
                id="about"
                onClick={() => {
                  handleSidebarClick("about", 720 - 50);
                }}
                className={activeLink === "about" ? "active" : ""}
              >
                <i className="icon-user"></i>About
              </span>
            </li>
            <li>
              <span
                id="skills"
                onClick={() => {
                  handleSidebarClick("skills", 1328 - 50);
                }}
                className={activeLink === "skills" ? "active" : ""}
              >
                <i className="icon-user"></i>Skills
              </span>
            </li>
            <li>
              <span
                id="services"
                onClick={() => {
                  handleSidebarClick("services", 2187 - 50);
                }}
                className={activeLink === "services" ? "active" : ""}
              >
                <i className="icon-bulb"></i>Services
              </span>
            </li>
            <li>
              <span
                id="resume"
                onClick={() => {
                  handleSidebarClick("resume", 2964 - 50);
                }}
                className={activeLink === "resume" ? "active" : ""}
              >
                <i className="icon-graduation"></i>Resume
              </span>
            </li>
            <li>
              <span
                id="works"
                onClick={() => {
                  handleSidebarClick("works", 3870 - 50);
                }}
                className={activeLink === "works" ? "active" : ""}
              >
                <i className="icon-grid"></i>Works
              </span>
            </li>

            <li>
              <span
                id="contact"
                onClick={() => {
                  handleSidebarClick("contact", 4582 - 50);
                }}
                className={activeLink === "contact" ? "active" : ""}
              >
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
              <a
                href="https://www.facebook.com/kelvin.orhungul"
                aria-label="facebook"
                target="_blank"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a
                href="https://twitter.com/KelvinOrhungul"
                aria-label="twitter"
                target="_blank"
              >
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a
                href="https://www.instagram.com/kelvinorhungul/"
                aria-label="instagram"
                target="_blank"
              >
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
          <span className="copyright">© 2020 Kelvin Orhungul</span>
        </div>
      </div>
    </header>
  );
};

export default SiteHeader;
