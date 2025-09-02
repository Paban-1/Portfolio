import React from "react";
import { RiArrowDownLine } from "@remixicon/react";

const Title = ({ Title = "", Title2 = "", className = "", TitleStyle }) => {
  return (
    <section className="p-2">
      <div
        className={` md:text-3xl text-xl ${className} flex justify-center items-center`}
      >
        <RiArrowDownLine className="md:w-12 md:h-10 w-8 h-8" />
        <p className={`${TitleStyle}`}>
          {Title} <br /> <span>{Title2}</span>
        </p>
      </div>
    </section>
  );
};

export default Title;
