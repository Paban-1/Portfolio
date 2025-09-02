import React, { useState } from "react";
import { NavItems } from "./Index";
import Logo from '../assets/logoo.png'
import { RiCloseFill, RiMenu3Fill } from "@remixicon/react";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const handelClick = () => {
    setToggle(false);
  };
  return (
    <nav className=" flex bg-black fixed top-0 w-full z-20 select-none">
      <div className=" w-1/2 rounded-tr-xl bg-[#f5f0e3] p-3 flex justify-center items-center">
        <img src={Logo} alt="" className="h-7 duration-300" />
      </div>
      <div className=" bg-[#f5f0e3]">
        <div className="w-full rounded-b-xl bg-black py-5 px-10 md:p-2 flex justify-center items-center duration-300">
          {NavItems.map((navitems, index) => (
            <a
              href={navitems.href}
              key={index}
              className="hidden md:flex text-gray-400 hover:text-yellow-500 duration-300 cursor-pointer pl-6 pr-6 space-x-8"
            >
              {navitems.label}
            </a>
          ))}
        </div>
      </div>
      <div className="w-1/2 rounded-tl-xl bg-[#f5f0e3] flex justify-center items-center p-3 text-black">
        <div className="hidden md:flex">AI</div>
        <div>
          <button className="md:hidden flex" onClick={() => setToggle(!toggle)}>
            {toggle ? <RiCloseFill /> : <RiMenu3Fill />}
          </button>
          {toggle && (
            <div className="border md:hidden flex rounded-xl p-2 fixed right-2 top-12 backdrop-blur-lg flex-col space-y-2 ">
              {NavItems.map((navitems, index) => {
                const Icons = navitems.icon;
                return (
                  <a
                    href={navitems.href}
                    key={index}
                    className="hover:text-yellow-500 duration-300"
                    onClick={handelClick}
                  >
                    <Icons />
                  </a>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
