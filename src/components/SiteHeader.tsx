import React, { FC } from "react";

const SiteHeader: FC = () => {
  return (
    <header className="left float-left shadow-dark" id="header">
      <button type="button" className="close" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
      <div className="header-inner d-flex align-items-start flex-column">
        <a href="index.html">
          <img src="https://via.placeholder.com/70x70" alt="Kelvin Orhungul" />
        </a>
        <a href="index.html" className="site-title dot mt-3">
          Kelvin Orhungul
        </a>
        <span className="site-slogan">Web Developer</span>

        {/* <!-- navigation menu --> */}
        <nav>
          <ul className="vertical-menu scrollspy">
            <li>
              <a href="#home" className="active">
                <i className="icon-home"></i>Home
              </a>
            </li>
            <li>
              <a href="#about">
                <i className="icon-user"></i>About
              </a>
            </li>
            <li>
              <a href="#services">
                <i className="icon-bulb"></i>Services
              </a>
            </li>
            <li>
              <a href="#resume">
                <i className="icon-graduation"></i>Resume
              </a>
            </li>
            <li>
              <a href="#works">
                <i className="icon-grid"></i>Works
              </a>
            </li>
            <li>
              <a href="#blog">
                <i className="icon-pencil"></i>Blog
              </a>
            </li>
            <li>
              <a href="#contact">
                <i className="icon-phone"></i>Contact
              </a>
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
