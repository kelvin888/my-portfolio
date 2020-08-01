import React, { FC } from "react";

const Blog: FC = () => {
  return (
    <section id="blog-section" className="shadow-blue white-bg padding">
      <h3 className="section-title">Recent posts</h3>
      <div className="spacer" data-height="80"></div>

      <div className="row">
        <div className="col-md-4">
          {/* <!-- blog item --> */}
          <div className="blog-item">
            <div className="thumb">
              <a href="#" aria-label="thoughts">
                <span className="category">Thoughts</span>
              </a>
              <a href="#" aria-label="blog title">
                <img
                  src="https://via.placeholder.com/800x600"
                  alt="blog-title"
                />
              </a>
            </div>
            <h4 className="mt-4 mb-0">
              <a href="#" aria-label="truth about design in 3 minutes">
                The Truth About Design In 3 Minutes
              </a>
            </h4>
            <ul className="list-inline meta mb-0 mt-3">
              <li className="list-inline-item">13 March, 2019</li>
              <li className="list-inline-item">Kelvin Orhungul</li>
            </ul>
          </div>
        </div>

        <div className="col-md-4">
          {/* <!-- blog item --> */}
          <div className="blog-item">
            <div className="thumb">
              <a href="#" aria-label="blog">
                <span className="category">Blog</span>
              </a>
              <a href="#" aria-label="blog title">
                <img
                  src="https://via.placeholder.com/800x600"
                  alt="blog-title"
                />
              </a>
            </div>
            <h4 className="mt-4 mb-0">
              <a href="#" aria-label="the ugly truth about design">
                The Ugly Truth About Design
              </a>
            </h4>
            <ul className="list-inline meta mb-0 mt-3">
              <li className="list-inline-item">13 March, 2019</li>
              <li className="list-inline-item">Kelvin Orhungul</li>
            </ul>
          </div>
        </div>

        <div className="col-md-4">
          {/* <!-- blog item --> */}
          <div className="blog-item">
            <div className="thumb">
              <a href="#" aria-label="tech">
                <span className="category">Tech</span>
              </a>
              <a href="#" aria-label="tech blog title">
                <img
                  src="https://via.placeholder.com/800x600"
                  alt="blog-title"
                />
              </a>
            </div>
            <h4 className="mt-4 mb-0">
              <a href="#" aria-label="how to become better with UI design">
                How To Become Better With UI Design
              </a>
            </h4>
            <ul className="list-inline meta mb-0 mt-3">
              <li className="list-inline-item">13 March, 2019</li>
              <li className="list-inline-item">Kelvin Orhungul</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
