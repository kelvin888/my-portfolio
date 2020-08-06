import React, { FC } from "react";

const Experience: FC = () => {
  return (
    <section id="resume-section" className="shadow-blue white-bg padding">
      <h3 className="section-title">Experience</h3>
      <div className="spacer" data-height="80"></div>

      {/* <!-- timeline --> */}
      <div className="timeline">
        <div className="entry">
          <div className="title">
            <span>June 2018 - present</span>
          </div>
          <div className="body">
            <h4 className="mt-0">Software Engineer(Frontend)</h4>
            <p>Africa Prudential PLC, Lagos</p>
          </div>
        </div>

        <div className="entry">
          <div className="title">
            <span>Jan 2018 - May 2018</span>
          </div>
          <div className="body">
            <h4 className="mt-0">Software Engineer(PHP)</h4>
            <p>Thinkshifts Ltd, Lagos</p>
          </div>
        </div>

        <div className="entry">
          <div className="title">
            <span>Aug 2017 - Dec 2017</span>
          </div>
          <div className="body">
            <h4 className="mt-0">Java Trainer</h4>
            <p>Aptech Computer Education, Lagos</p>
          </div>
        </div>

        <div className="entry">
          <div className="title">
            <span>June 2011 - June 2017</span>
          </div>
          <div className="body">
            <h4 className="mt-0">Java Developer</h4>
            <p>Panet Technologies Limited, Makurdi. </p>
          </div>
        </div>

        <span className="timeline-line"></span>
      </div>
    </section>
  );
};

export default Experience;
