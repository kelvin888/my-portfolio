import React, { FC } from "react";
import LinkButton from "../LinkButton";
import kelvinHood from "../../assets/img/kelv-passport.png";

const About: FC = () => {
  return (
    <section id="about-section" className="shadow-blue white-bg padding">
      <h3 className="section-title">About Me</h3>
      <div className="spacer" data-height="80"></div>

      <div className="row">
        <div className="col-md-3">
          <img
            src={kelvinHood}
            alt="about"
            style={{ width: "150px", borderRadius: "50%" }}
          />
        </div>
        <div className="col-md-9">
          <h2 className="mt-4 mt-md-0 mb-4">Hello,</h2>
          <p className="mb-0">
            I am Kelvin Orhungul, web developer from London, United Kingdom. I
            have rich experience in web site design and building and
            customization, also I am good at wordpress.
          </p>
          <div className="row my-4">
            <div className="col-md-6">
              <p className="mb-2">
                Name: <span className="text-dark">Kelvin Orhungul</span>
              </p>
              <p className="mb-0">
                Birthday: <span className="text-dark">14 August, 1990</span>
              </p>
            </div>
            <div className="col-md-6 mt-2 mt-md-0 mt-sm-2">
              <p className="mb-2">
                Location: <span className="text-dark">London, UK</span>
              </p>
              <p className="mb-0">
                Email: <span className="text-dark">hello@bako.com</span>
              </p>
            </div>
          </div>
          <LinkButton href="#" className="btn btn-default mr-3">
            <i className="icon-cloud-download"></i>Download CV
          </LinkButton>
          <LinkButton href="#" className="btn btn-alt mt-2 mt-md-0 mt-xs-2">
            <i className="icon-envelope"></i>Hire me
          </LinkButton>
        </div>
      </div>
    </section>
  );
};

export default About;
