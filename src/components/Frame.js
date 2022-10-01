import React from "react";
import FTB from "./frames/FTB";
import Y58 from "./frames/Y58";

const Frame = ({ timeline, activeFrameId }) => {
  const frameSwitch = () => {
    switch (activeFrameId) {
      case "FTB":
        return <FTB></FTB>;
      case "Y58":
        return <Y58></Y58>;
      default:
        console.log("Switch Default");
    }
  };

  return <div id="frame">{frameSwitch()}</div>;
};

export default Frame;
