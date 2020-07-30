import React from "react";

const Preloader: React.FC = () => {
  return (
    <div id="preloader">
      <div className="outer">
        <div className="spinner">
          <div className="dot1"></div>
          <div className="dot2"></div>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
