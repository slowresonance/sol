import React from "react";
import FTB from "./frames/FTB";
import Y58 from "./frames/Y58";
import TSM1 from "./frames/TSM1";
import TSM2 from "./frames/TSM2";

const Frame = ({ timeline, activeFrameId, collection, setCollection }) => {
  const frameSwitch = () => {
    switch (activeFrameId) {
      case "FTB":
        return (
          <FTB collection={collection} setCollection={setCollection}></FTB>
        );
      case "Y58":
        return (
          <Y58 collection={collection} setCollection={setCollection}></Y58>
        );
      case "TSM1":
        return (
          <TSM1 collection={collection} setCollection={setCollection}></TSM1>
        );
      case "TSM2":
        return (
          <TSM2 collection={collection} setCollection={setCollection}></TSM2>
        );
      default:
        console.log("Switch Default");
    }
  };

  return <div id="frame">{frameSwitch()}</div>;
};

export default Frame;
