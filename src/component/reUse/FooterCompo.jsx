import React from "react";

const FooterCompo = ({ className = "", FooterIcon }) => {
  return (
    <div className={` rounded-full p-2 ${className}`}>
      {<FooterIcon /> && <FooterIcon  className="md:h-10 h-8 md:w-6 w-4"/>}
    </div>
  );
};

export default FooterCompo;
