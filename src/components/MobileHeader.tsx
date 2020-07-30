import React, { FC } from "react";

const MobileHeader: FC = () => {
  return (
    <div className="mobile-header py-2 px-3 mt-4">
      <button className="menu-icon mr-2">
        <span></span>
        <span></span>
        <span></span>
      </button>
      <a href="index.html" className="logo">
        <img src="https://via.placeholder.com/70x70" alt="Kelvin Orhungul" />
      </a>
      <a href="index.html" className="site-title dot ml-2">
        Kelvin Orhungul
      </a>
    </div>
  );
};

export default MobileHeader;
