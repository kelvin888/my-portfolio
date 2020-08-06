import React, { FC } from "react";

const Services: FC = () => {
  return (
    <section id="services-section" className="shadow-blue white-bg padding">
      <h3 className="section-title">Services</h3>
      <div className="spacer" data-height="80"></div>

      <div className="row">
        <div className="col-md-4 col-sm-6">
          {/* <!-- service item --> */}
          <div className="service-item text-center">
            <i className="icon-chemistry icon-simple"></i>
            <h4 className="my-3">Design</h4>
            <p className="mb-0">
              Just imaging it - I'll help prototype it and make it come alive in
              the best way possible.
            </p>
          </div>
          <div className="spacer" data-height="20"></div>
        </div>

        <div className="col-md-4 col-sm-6">
          {/* <!-- service item --> */}
          <div className="service-item text-center">
            <i className="icon-globe icon-simple"></i>
            <h4 className="my-3">Development</h4>
            <p className="mb-0">
              Turn your idea into a real world project using the latest
              technologies.
            </p>
          </div>
          <div className="spacer" data-height="20"></div>
        </div>

        <div className="col-md-4 col-sm-6">
          {/* <!-- service item --> */}
          <div className="service-item text-center">
            <i className="icon-bubbles icon-simple"></i>
            <h4 className="my-3">Accesibility</h4>
            <p className="mb-0">
              I'll ensure that your app is accesible on all platforms(web, site
              readers etc. )
            </p>
          </div>
        </div>

        <div className="col-md-4 col-sm-6">
          {/* <!-- service item --> */}
          <div className="service-item text-center">
            <i className="icon-bubbles icon-simple"></i>
            <h4 className="my-3">Responsiveness</h4>
            <p className="mb-0">
              I'll ensure that your app respond to different device sizes.
            </p>
          </div>
        </div>

        <div className="col-md-4 col-sm-6">
          {/* <!-- service item --> */}
          <div className="service-item text-center">
            <i className="icon-bubbles icon-simple"></i>
            <h4 className="my-3">Optimization</h4>
            <p className="mb-0">
              I'll ensure that your site loads the fastest possible way and
              performs optimally
            </p>
          </div>
        </div>

        <div className="col-md-4 col-sm-6">
          {/* <!-- service item --> */}
          <div className="service-item text-center">
            <i className="icon-rocket icon-simple"></i>
            <h4 className="my-3">User Experience</h4>
            <p className="mb-0">
              Your users will enjoy an amazing experience that will enhance
              return rate.
            </p>
          </div>
          <div className="spacer d-md-none d-lg-none" data-height="20"></div>
        </div>
      </div>
    </section>
  );
};

export default Services;
