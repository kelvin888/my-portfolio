import React, { FC } from "react";
import TextField from "../TextField";

const Contact: FC = () => {
  return (
    <section id="contact" className="shadow-blue white-bg padding">
      <h3 className="section-title">Get in touch</h3>
      <div className="spacer" data-height="80"></div>

      <div className="row">
        <div className="col-md-4 mb-4 mb-md-0">
          {/* <!-- contact info --> */}
          <div className="contact-info mb-5">
            <i className="icon-phone"></i>
            <div className="details">
              <h5>Phone</h5>
              <span>+44 1632 960428</span>
            </div>
          </div>
          <div className="contact-info mb-5">
            <i className="icon-envelope"></i>
            <div className="details">
              <h5>Email address</h5>
              <span>hello@bako.com</span>
            </div>
          </div>
          <div className="contact-info">
            <i className="icon-location-pin"></i>
            <div className="details">
              <h5>Location</h5>
              <span>West Palm Beach, 4669 Travis Street</span>
            </div>
          </div>
        </div>

        <div className="col-md-8">
          {/* <!-- Contact Form --> */}
          <form
            id="contact-form"
            className="contact-form"
            method="post"
            action="form/contact.php"
          >
            <div className="messages"></div>

            <div className="row">
              <div className="column col-md-6">
                <TextField
                  type="text"
                  className="form-control"
                  name="InputName"
                  id="InputName"
                  placeholder="Your name"
                  required={true}
                  error="Name is required."
                />
              </div>

              <div className="column col-md-6">
                <TextField
                  type="email"
                  className="form-control"
                  id="InputEmail"
                  name="InputEmail"
                  placeholder="Email address"
                  required={true}
                  error="Email is required."
                />
              </div>

              <div className="column col-md-12">
                <TextField
                  type="text"
                  className="form-control"
                  id="InputSubject"
                  name="InputSubject"
                  placeholder="Enter a Subject"
                  required={true}
                  error=""
                />
              </div>

              <div className="column col-md-12">
                {/* <!-- Message textarea --> */}
                <div className="form-group">
                  <textarea
                    name="InputMessage"
                    id="InputMessage"
                    className="form-control"
                    rows={5}
                    placeholder="Message"
                    required={true}
                    data-error="Message is required."
                  ></textarea>
                  <div className="help-block with-errors"></div>
                </div>
              </div>
            </div>

            <button
              type="submit"
              name="submit"
              id="submit"
              value="Submit"
              className="btn btn-default"
            >
              <i className="icon-paper-plane"></i>Send Message
            </button>
            {/* <!-- Send Button --> */}
          </form>
          {/* <!-- Contact Form end --> */}
        </div>
      </div>
    </section>
  );
};

export default Contact;
