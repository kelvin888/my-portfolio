import React from "react";
import Spinner from "./Spinner";

const Preloader: React.FC = () => {
  return (
    <div id="preloader">
      <div className="outer">
        <Spinner />
      </div>
    </div>
  );
};

export default Preloader;
