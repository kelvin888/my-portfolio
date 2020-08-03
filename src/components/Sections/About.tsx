import React, { FC } from "react";
import LinkButton from "../LinkButton";
import kelvinHood from "../../assets/img/kelv-face.png";
import cvLink from "../../assets/pdf/cv.pdf";
import { scrollToNode } from "../../utils/functions";

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
            I am Kelvin Orhungul, web developer from Lagos, Nigeria. I am
            passionate about developing software using best practices and design
            patterns. I prefer atomic design for my styling, focus on test
            driven development to minimize errors and also follow DRY principles
            to reduce repetition and redundancy. I look forward to working with
            a talented team that focuses on building best-in-class solutions.
          </p>
          <div className="row my-4">
            <div className="col-md-6">
              <p className="mb-2">
                Name: <span className="text-dark">Kelvin Orhungul</span>
              </p>
              <p className="mb-0">
                Phone: <span className="text-dark">+2348032626521</span>
              </p>
            </div>
            <div className="col-md-6 mt-2 mt-md-0 mt-sm-2">
              <p className="mb-2">
                Location: <span className="text-dark">Lagos, Nigeria</span>
              </p>
              <p className="mb-0">
                Email:{" "}
                <span className="text-dark">kelvin.orhungul@yahoo.com</span>
              </p>
            </div>
          </div>
          <LinkButton
            href={cvLink}
            download={true}
            className="btn btn-default mr-3"
          >
            <i className="icon-cloud-download"></i>Download CV
          </LinkButton>
          <LinkButton
            href="#"
            className="btn btn-alt mt-2 mt-md-0 mt-xs-2"
            onClick={() => scrollToNode(4582 - 50)}
          >
            <i className="icon-envelope"></i>Hire me
          </LinkButton>
        </div>
      </div>
    </section>
  );
};

export default About;
