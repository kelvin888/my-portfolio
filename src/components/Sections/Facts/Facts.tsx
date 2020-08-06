import React, { FC } from "react";
import FactItem from "./FactItem";

const Facts: FC = () => {
  return (
    <section
      id="facts"
      className="shadow-dark color-white background parallax padding-50"
      data-image-src="images/background-1.jpg"
    >
      <div className="row relative z-1">
        <div className="col-md-3 col-sm-6">
          <FactItem
            count={2}
            name="Projects Completed"
            icon={<i className="icon-like icon-circle"></i>}
          />
        </div>
        <div className="col-md-3 col-sm-6">
          <FactItem
            count={2765}
            name="Cups of coffee"
            icon={<i className="icon-cup icon-circle"></i>}
          />
        </div>
        <div className="col-md-3 col-sm-6">
          <FactItem
            count={2}
            name="Happy Customers"
            icon={<i className="icon-emotsmile icon-circle"></i>}
          />
        </div>
        <div className="col-md-3 col-sm-6">
          <FactItem
            count={5}
            name="Ongoing projects"
            icon={<i className="icon-energy icon-circle"></i>}
          />
        </div>
      </div>

      <div className="overlay"></div>
    </section>
  );
};

export default Facts;
