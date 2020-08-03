import React, { FC } from "react";
import LinkButton from "../LinkButton";
import heroBg from "../../assets/img/kelvin.jpg";
import { scrollToNode } from "../../utils/functions";

const Hero: FC = () => {
  return (
    <section
      className="hero background parallax shadow-dark d-flex align-items-center"
      id="home-section"
      data-image-src={heroBg}
    >
      <div className="cta mx-auto mt-2">
        <h1 className="mt-0 mb-4">
          I’m Kelvin Orhungul<span className="dot"></span>
        </h1>
        <p className="mb-4">
          He lay on his armour-like back, and if he lifted his head a little he
          could see his brown belly, slightly domed and divided by arches into
          stiff sections.
        </p>
        <LinkButton
          className="btn btn-default btn-lg mr-3"
          onClick={() => scrollToNode(3870 - 50)}
        >
          <i className="icon-grid"></i>View Portfolio
        </LinkButton>
        <div
          className="spacer d-md-none d-lg-none d-sm-none"
          data-height="10"
        ></div>
        <LinkButton
          className="btn btn-border-light btn-lg"
          onClick={() => scrollToNode(4582 - 50)}
        >
          <i className="icon-envelope"></i>Hire me
        </LinkButton>
      </div>
      <div className="overlay"></div>
    </section>
  );
};

export default Hero;
