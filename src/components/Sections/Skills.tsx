import React, { FC } from "react";

const Skills: FC = () => {
  return (
    <section id="skills-section" className="shadow-blue white-bg padding">
      <h3 className="section-title">My skills</h3>
      <div className="spacer" data-height="80"></div>

      <p className="mb-0">
        The frontend technologies have continuously evolved and will continue
        even in the future. I have the requisite skills to build web
        applications but my most valuable skill is the desire to continue
        learning and stay informed.
      </p>

      <div className="row mt-5">
        <div className="col-md-6">
          {/* <!-- skill item --> */}
          <div className="skill-item">
            <div className="skill-info clearfix">
              <h4 className="float-left mb-3 mt-0">REACT</h4>
              <span className="float-right">85%</span>
            </div>
            <div className="progress">
              <div
                className="progress-bar"
                role="progressbar"
                aria-valuemin={0}
                aria-valuemax={100}
                aria-valuenow={85}
              ></div>
            </div>
            <div className="spacer" data-height="50"></div>
          </div>
        </div>

        <div className="col-md-6">
          {/* <!-- skill item --> */}
          <div className="skill-item">
            <div className="skill-info clearfix">
              <h4 className="float-left mb-3 mt-0">HTML & CSS</h4>
              <span className="float-right">90%</span>
            </div>
            <div className="progress">
              <div
                className="progress-bar"
                role="progressbar"
                aria-valuemin={0}
                aria-valuemax={100}
                aria-valuenow={90}
              ></div>
            </div>
            <div className="spacer" data-height="50"></div>
          </div>
        </div>

        <div className="col-md-6">
          {/* <!-- skill item --> */}
          <div className="skill-item">
            <div className="skill-info clearfix">
              <h4 className="float-left mb-3 mt-0">Javascript</h4>
              <span className="float-right">80%</span>
            </div>
            <div className="progress">
              <div
                className="progress-bar"
                role="progressbar"
                aria-valuemin={0}
                aria-valuemax={100}
                aria-valuenow={80}
              ></div>
            </div>
            <div className="spacer d-md-none d-lg-none" data-height="50"></div>
          </div>
        </div>

        <div className="col-md-6">
          {/* <!-- skill item --> */}
          <div className="skill-item">
            <div className="skill-info clearfix">
              <h4 className="float-left mb-3 mt-0">Typescript</h4>
              <span className="float-right">70%</span>
            </div>
            <div className="progress">
              <div
                className="progress-bar"
                role="progressbar"
                aria-valuemin={0}
                aria-valuemax={100}
                aria-valuenow={70}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
