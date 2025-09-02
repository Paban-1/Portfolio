import React from "react";
import {

  RiStarLine,
} from "@remixicon/react";
import Logo from "../assets/logoo.png";
import FooterCompo from "./reUse/FooterCompo";
import { FOOTERDATA } from "./Index";

const Footer = () => {
  return (
    <footer className=" p-10 md:flex flex-wrap justify-between bg-white shadow space-y-6">
      <div className="  flex justify-start items-center">
        <img src={Logo} alt="logo" className="h-10" />
      </div>
      <div className="flex justify-center items-center gap-4">
        {FOOTERDATA.map((footerdata, index) => (
          <FooterCompo
            key={index}
            FooterIcon={footerdata.FooterIcon}
            className={footerdata.className}
          />
        ))}
      </div>
      <div className=" flex justify-center items-center">
        <p className="flex-col ">
          <span className="flex gap-2">
            <RiStarLine />
            <RiStarLine />
            <RiStarLine />
            <RiStarLine />
            <RiStarLine />
          </span>

          <span className="text-xl md:text-1xl">You can hire me!</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
