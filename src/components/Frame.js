import React from "react";
import ParkerSolarProbe from "./Frames/ParkerSolarProbe";
import SolarWind from "./Frames/SolarWind";
import TheSolarMission from "./Frames/TheSolarMission";
import TheSolarMission2 from "./Frames/TheSolarMission2";

const Frame = ({ frameId, collection, setCollection }) => {
  console.log(collection);
  const frameSwitch = () => {
    switch (frameId) {
      case "parker-solar-probe":
        return (
          <ParkerSolarProbe
            collection={collection}
            setCollection={setCollection}
          ></ParkerSolarProbe>
        );
      case "solar-wind":
        return (
          <SolarWind
            collection={collection}
            setCollection={setCollection}
          ></SolarWind>
        );
      case "the-solar-mission":
        return (
          <TheSolarMission
            collection={collection}
            setCollection={setCollection}
          ></TheSolarMission>
        );
      case "the-solar-mission-2":
        return (
          <TheSolarMission2
            collection={collection}
            setCollection={setCollection}
          ></TheSolarMission2>
        );
      default:
        break;
    }
  };
  return <div id="frame">{frameSwitch(frameId)}</div>;
};

export default Frame;
