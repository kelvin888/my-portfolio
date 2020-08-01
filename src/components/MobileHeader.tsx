import React, { FC } from "react";
import Hamburger from "./Hamburger";
import Kelv from "../assets/img/kelv-passport.png";

const MobileHeader: FC = () => {
  return (
    <div className="mobile-header py-2 px-3 mt-4">
      <Hamburger />
      <a href="index.html" className="logo">
        <img src={Kelv} style={{ borderRadius: "50%" }} alt="Kelvin Orhungul" />
      </a>
      <a href="index.html" className="site-title dot ml-2">
        Kelvin Orhungul
      </a>
    </div>
  );
};

export default MobileHeader;
