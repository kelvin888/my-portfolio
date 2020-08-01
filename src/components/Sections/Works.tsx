import React, { FC } from "react";
import LinkButton from "../LinkButton";
import threeA from "../../assets/img/3a.jpg";
import esusu from "../../assets/img/esusu.jpg";

const Works: FC = () => {
  return (
    <section id="works-section" className="shadow-blue white-bg padding">
      <h3 className="section-title">Portfolio</h3>
      <div className="spacer" data-height="80"></div>

      {/* <!-- portfolio filter (desktop) --> */}
      <ul className="portfolio-filter list-inline">
        <li className="current list-inline-item" data-filter="*">
          React
        </li>
        <li className="list-inline-item" data-filter=".branding">
          PHP
        </li>
      </ul>

      {/* <!-- portfolio filter (mobile) --> */}
      <div className="pf-filter-wrapper mb-4">
        <select className="portfolio-filter-mobile">
          <option value="*">React</option>
          <option value=".creative">PHP</option>
        </select>
      </div>

      {/* <!-- portolio wrapper --> */}
      <div className="row portfolio-wrapper">
        {/* <!-- portfolio item --> */}
        <div className="col-md-4 col-sm-6 grid-item video">
          <a href="work-single.html">
            <div className="portfolio-item">
              <div className="details">
                <h4 className="title">3a Security</h4>
                <span className="term">Web Application, Security</span>
              </div>
              <span className="plus-icon">+</span>
              <div className="thumb">
                <img src={threeA} alt="Portfolio-title" />
                <div className="mask"></div>
              </div>
            </div>
          </a>
        </div>

        {/* <!-- portfolio item --> */}
        <div className="col-md-4 col-sm-6 grid-item creative design">
          <a href="work-single.html">
            <div className="portfolio-item">
              <div className="details">
                <h4 className="title">Esusu</h4>
                <span className="term">
                  Web Application, Investment, Savings
                </span>
              </div>
              <span className="plus-icon">+</span>
              <div className="thumb">
                <img src={esusu} alt="Portfolio-title" />
                <div className="mask"></div>
              </div>
            </div>
          </a>
        </div>
      </div>

      {/* <!-- more button --> */}
      <div className="load-more text-center mt-4">
        <LinkButton href="#" className="btn btn-default">
          <i className="fas fa-circle-notch"></i> Load more
        </LinkButton>
        {/* <!-- numbered pagination (hidden for infinite scroll) --> */}
        <ul className="portfolio-pagination list-inline d-none">
          <li className="list-inline-item">1</li>
          <li className="list-inline-item">
            <a href="works-2.html">2</a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Works;
