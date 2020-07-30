import React, { FC } from "react";

const Skills: FC = () => {
  return (
    <section id="skills" className="shadow-blue white-bg padding">
      <h3 className="section-title">My skills</h3>
      <div className="spacer" data-height="80"></div>

      <p className="mb-0">
        Far far away, behind the word mountains, far from the countries Vokalia
        and Consonantia, there live the blind texts. Separated they live in
        Bookmarksgrove right at the coast of the Semantics
      </p>

      <div className="row mt-5">
        <div className="col-md-6">
          {/* <!-- skill item --> */}
          <div className="skill-item">
            <div className="skill-info clearfix">
              <h4 className="float-left mb-3 mt-0">WordPress</h4>
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
              <h4 className="float-left mb-3 mt-0">jQuery</h4>
              <span className="float-right">60%</span>
            </div>
            <div className="progress">
              <div
                className="progress-bar"
                role="progressbar"
                aria-valuemin={0}
                aria-valuemax={100}
                aria-valuenow={60}
              ></div>
            </div>
            <div className="spacer d-md-none d-lg-none" data-height="50"></div>
          </div>
        </div>

        <div className="col-md-6">
          {/* <!-- skill item --> */}
          <div className="skill-item">
            <div className="skill-info clearfix">
              <h4 className="float-left mb-3 mt-0">Sketch</h4>
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
