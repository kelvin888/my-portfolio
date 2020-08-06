import React, { FC } from "react";
import LinkButton from "../LinkButton";
import threeA from "../../assets/img/3a.jpg";
import esusu from "../../assets/img/starturn-snapshot.png";
import beztAdmin from "../../assets/img/beztAdmin.png";

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
        <li className="list-inline-item" data-filter=".php">
          PHP
        </li>
        <li className="list-inline-item" data-filter=".design">
          Design
        </li>
      </ul>

      {/* <!-- portfolio filter (mobile) --> */}
      <div className="pf-filter-wrapper mb-4">
        <select className="portfolio-filter-mobile">
          <option value="*">React</option>
          <option value=".creative">PHP</option>
          <option value="">Design</option>
        </select>
      </div>

      {/* <!-- portolio wrapper --> */}
      <div className="row portfolio-wrapper">
        {/* <!-- portfolio item --> */}
        <div className="col-md-4 col-sm-6 grid-item creative design">
          <a href="http://starturn.ng">
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

        {/* <!-- portfolio item --> */}
        <div className="col-md-4 col-sm-6 grid-item video">
          <a href="https://3asecurity.co.uk">
            <div className="portfolio-item">
              <div className="details">
                <h4 className="title">3a Security</h4>
                <span className="term">
                  Web Application, Credit Card Security
                </span>
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
          <a href="https://bezt-admin.netlify.app/">
            <div className="portfolio-item">
              <div className="details">
                <h4 className="title">Design</h4>
                <span className="term">
                  Just a simple admin design using REACT and react-spring
                  animations.
                </span>
              </div>
              <span className="plus-icon">+</span>
              <div className="thumb">
                <img src={beztAdmin} alt="Portfolio-title" />
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
