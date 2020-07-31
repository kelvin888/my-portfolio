import React, { FC } from "react";
import LinkButton from "../LinkButton";

const Works: FC = () => {
  return (
    <section id="works" className="shadow-blue white-bg padding">
      <h3 className="section-title">Portfolio</h3>
      <div className="spacer" data-height="80"></div>

      {/* <!-- portfolio filter (desktop) --> */}
      <ul className="portfolio-filter list-inline">
        <li className="current list-inline-item" data-filter="*">
          All Projects
        </li>
        <li className="list-inline-item" data-filter=".branding">
          Branding
        </li>
        <li className="list-inline-item" data-filter=".creative">
          Creative
        </li>
        <li className="list-inline-item" data-filter=".design">
          Design
        </li>
        <li className="list-inline-item" data-filter=".video">
          Video
        </li>
      </ul>

      {/* <!-- portfolio filter (mobile) --> */}
      <div className="pf-filter-wrapper mb-4">
        <select className="portfolio-filter-mobile">
          <option value="*">Everything</option>
          <option value=".creative">Creative</option>
          <option value=".video">Video</option>
          <option value=".design">Design</option>
          <option value=".branding">Branding</option>
        </select>
      </div>

      {/* <!-- portolio wrapper --> */}
      <div className="row portfolio-wrapper">
        {/* <!-- portfolio item --> */}
        <div className="col-md-4 col-sm-6 grid-item video">
          <a href="work-single.html">
            <div className="portfolio-item">
              <div className="details">
                <h4 className="title">Creative Art</h4>
                <span className="term">Art, Creative</span>
              </div>
              <span className="plus-icon">+</span>
              <div className="thumb">
                <img
                  src="https://via.placeholder.com/800x600"
                  alt="Portfolio-title"
                />
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
                <h4 className="title">Apple USB</h4>
                <span className="term">Creative, Design</span>
              </div>
              <span className="plus-icon">+</span>
              <div className="thumb">
                <img
                  src="https://via.placeholder.com/800x600"
                  alt="Portfolio-title"
                />
                <div className="mask"></div>
              </div>
            </div>
          </a>
        </div>

        {/* <!-- portfolio item --> */}
        <div className="col-md-4 col-sm-6 grid-item branding">
          <a href="work-single.html">
            <div className="portfolio-item">
              <div className="details">
                <h4 className="title">Work Space</h4>
                <span className="term">Branding</span>
              </div>
              <span className="plus-icon">+</span>
              <div className="thumb">
                <img
                  src="https://via.placeholder.com/800x600"
                  alt="Portfolio-title"
                />
                <div className="mask"></div>
              </div>
            </div>
          </a>
        </div>

        {/* <!-- portfolio item --> */}
        <div className="col-md-4 col-sm-6 grid-item creative">
          <a href="work-single.html">
            <div className="portfolio-item">
              <div className="details">
                <h4 className="title">Creative Bulb</h4>
                <span className="term">Creative</span>
              </div>
              <span className="plus-icon">+</span>
              <div className="thumb">
                <img
                  src="https://via.placeholder.com/800x600"
                  alt="Portfolio-title"
                />
                <div className="mask"></div>
              </div>
            </div>
          </a>
        </div>

        {/* <!-- portfolio item --> */}
        <div className="col-md-4 col-sm-6 grid-item video branding">
          <a href="work-single.html">
            <div className="portfolio-item">
              <div className="details">
                <h4 className="title">iPhone 8</h4>
                <span className="term">Art, Branding</span>
              </div>
              <span className="plus-icon">+</span>
              <div className="thumb">
                <img
                  src="https://via.placeholder.com/800x600"
                  alt="Portfolio-title"
                />
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
                <h4 className="title">Minimal Art</h4>
                <span className="term">Design, Creative</span>
              </div>
              <span className="plus-icon">+</span>
              <div className="thumb">
                <img
                  src="https://via.placeholder.com/800x600"
                  alt="Portfolio-title"
                />
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
