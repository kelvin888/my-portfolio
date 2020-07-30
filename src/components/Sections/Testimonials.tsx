import React, { FC } from "react";

const Testimonials: FC = () => {
  return (
    <section id="testimonials" className="shadow-blue white-bg padding">
      <h3 className="section-title">Testimonials</h3>
      <div className="spacer" data-height="97"></div>

      <div className="row testimonials-wrapper">
        <div className="col-md-6">
          {/* <!-- testimonial item --> */}
          <div className="testimonial-item">
            <span className="symbol">
              <i className="fas fa-quote-left"></i>
            </span>
            <p>
              I enjoy working with the theme and learn so much. You guys make
              the process fun and interesting. Good luck!
            </p>
            <div className="testimonial-details">
              <div className="thumb">
                <img
                  src="https://via.placeholder.com/40x40"
                  alt="customer-name"
                />
              </div>
              <div className="info">
                <h4>Helen Doe</h4>
                <span>Themeforest customer</span>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          {/* <!-- testimonial item --> */}
          <div className="testimonial-item">
            <span className="symbol">
              <i className="fas fa-quote-left"></i>
            </span>
            <p>
              I enjoy working with the theme and learn so much. You guys make
              the process fun and interesting. Good luck!
            </p>
            <div className="testimonial-details">
              <div className="thumb">
                <img
                  src="https://via.placeholder.com/40x40"
                  alt="customer-name"
                />
              </div>
              <div className="info">
                <h4>Jane Doe</h4>
                <span>Themeforest customer</span>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          {/* <!-- testimonial item --> */}
          <div className="testimonial-item">
            <span className="symbol">
              <i className="fas fa-quote-left"></i>
            </span>
            <p>
              I enjoy working with the theme and learn so much. You guys make
              the process fun and interesting. Good luck!
            </p>
            <div className="testimonial-details">
              <div className="thumb">
                <img
                  src="https://via.placeholder.com/40x40"
                  alt="customer-name"
                />
              </div>
              <div className="info">
                <h4>Helen Doe</h4>
                <span>Themeforest customer</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
