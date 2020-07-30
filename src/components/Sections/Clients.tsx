import React, { FC } from "react";

const Clients: FC = () => {
  return (
    <section
      id="clients"
      className="shadow-dark background-blue color-white padding-50"
    >
      {/* <!-- hidden heading for validation --> */}
      <h2 className="d-none">Clients</h2>

      {/* <!-- clients wrapper --> */}
      <div className="clients-wrapper row">
        <div className="col-md-3">
          {/* <!-- client item --> */}
          <div className="client-item">
            <div className="inner">
              <img src="https://via.placeholder.com/143x20" alt="client-name" />
            </div>
          </div>
        </div>

        <div className="col-md-3">
          {/* <!-- client item --> */}
          <div className="client-item">
            <div className="inner">
              <img src="https://via.placeholder.com/143x20" alt="client-name" />
            </div>
          </div>
        </div>

        <div className="col-md-3">
          {/* <!-- client item --> */}
          <div className="client-item">
            <div className="inner">
              <img src="https://via.placeholder.com/143x20" alt="client-name" />
            </div>
          </div>
        </div>

        <div className="col-md-3">
          {/* <!-- client item --> */}
          <div className="client-item">
            <div className="inner">
              <img src="https://via.placeholder.com/143x20" alt="client-name" />
            </div>
          </div>
        </div>

        <div className="col-md-3">
          {/* <!-- client item --> */}
          <div className="client-item">
            <div className="inner">
              <img src="https://via.placeholder.com/143x20" alt="client-name" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
