import React, { FC } from "react";

const Hero: FC = () => {
  return (
    <section
      className="hero background parallax shadow-dark d-flex align-items-center"
      id="home"
      data-image-src="https://via.placeholder.com/900x600"
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
        <a href="#" className="btn btn-default btn-lg mr-3">
          <i className="icon-grid"></i>View Portfolio
        </a>
        <div
          className="spacer d-md-none d-lg-none d-sm-none"
          data-height="10"
        ></div>
        <a href="#" className="btn btn-border-light btn-lg">
          <i className="icon-envelope"></i>Hire me
        </a>
      </div>
      <div className="overlay"></div>
    </section>
  );
};

export default Hero;
