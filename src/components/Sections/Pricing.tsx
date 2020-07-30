import React, { FC } from "react";

const Pricing: FC = () => {
  return (
    <section id="price" className="shadow-blue white-bg padding">
      <h3 className="section-title">Pricing table</h3>
      <div className="spacer" data-height="97"></div>

      <div className="row">
        <div className="col-md-4 pr-md-0 mt-3">
          {/* <!-- price item --> */}
          <div className="price-item text-center">
            <i className="price-icon icon-energy"></i>
            <span className="plan">Basic</span>
            <h3 className="price">
              <em>$</em>14<span>/mo</span>
            </h3>
            <div className="price-content">
              <ul>
                <li>Frontend Builder</li>
                <li>Regular Support</li>
                <li>1 Years of Updates</li>
              </ul>
            </div>
            <a href="#" className="btn btn-default">
              Get Started
            </a>
          </div>
        </div>

        <div className="col-md-4 px-md-0 my-5 my-md-0">
          {/* <!-- price item --> */}
          <div className="price-item text-center recommended">
            <i className="price-icon icon-fire"></i>
            <span className="plan">Professional</span>
            <h3 className="price">
              <em>$</em>41<span>/mo</span>
            </h3>
            <div className="price-content">
              <ul>
                <li>Frontend Builder</li>
                <li>Regular Support</li>
                <li>2 Years of Updates</li>
                <li>White Labeling</li>
              </ul>
            </div>
            <a href="#" className="btn btn-default">
              Get Started
            </a>
          </div>
        </div>

        <div className="col-md-4 pl-md-0 mt-0 mt-md-3">
          {/* <!-- price item --> */}
          <div className="price-item text-center">
            <i className="price-icon icon-rocket"></i>
            <span className="plan">Premium</span>
            <h3 className="price">
              <em>$</em>99<span>/mo</span>
            </h3>
            <div className="price-content">
              <ul>
                <li>Frontend Builder</li>
                <li>Regular Support</li>
                <li>3 Years of Updates</li>
              </ul>
            </div>
            <a href="#" className="btn btn-default">
              Get Started
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
