import React, { FC } from "react";
import threeALogo from "../../assets/img/3a-logo.jpg";
import esusuLogo from "../../assets/img/esusu-logo.jpg";

const Clients: FC = () => {
  return (
    <section
      id="clients-section"
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
              <img src={threeALogo} alt="client-name" />
            </div>
          </div>
        </div>

        <div className="col-md-3">
          {/* <!-- client item --> */}
          <div className="client-item">
            <div className="inner">
              <img src={esusuLogo} alt="client-name" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
