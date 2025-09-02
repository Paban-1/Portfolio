import React from "react";
import ProfilePic from "../assets/profileDp.png";

const ChardFour = ({ className = "", ProfilePic = {} }) => {
  return (
    <section className=" rounded-xl h-40 w-56 reletive">
      <div
        className={`h-full w-1/2 flex justify-end ${className} rounded-3xl `}
      >
        <img src={ProfilePic} alt="Profile" className="h-40"/>
        <div className="rounded-full h-10 w-10 bg-[#f5f0e3] absolute"></div>
      </div>
    </section>
  );
};

export default ChardFour;
