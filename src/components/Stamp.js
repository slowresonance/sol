import React from "react";

const Stamp = ({ img, alt, found }) => {
  return (
    <div className="stamp">
      <img src={found ? img : "./assets/stamp-placeholder.png"} alt={alt} />
    </div>
  );
};

export default Stamp;
