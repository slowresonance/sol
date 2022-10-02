import React, { useState, useEffect } from "react";
import Stamp from "../Stamp";

const TheSolarMission2 = ({ collection, setCollection }) => {
  const [found, setFound] = useState(false);
  const [img, setImg] = useState(imgs[0]);
  let collectible = {
    id: "solar-flare",
    img: "./assets/solar-flare.png",
    alt: "NASA Solar Flare Stamp",
    found: false,
  };

  useEffect(() => {
    console.log(collection);
    if (!found) return;
    for (let c of collection) {
      if (c.id === collectible.id) {
        return;
      }
    }
    const updatedCollectable = { ...collectible, found: true };
    setCollection([...collection, updatedCollectable]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [found]);

  return (
    <div id="the-solar-mission-2">
      <div className="left-flex">
        <div className="p">
          Parker Solar Probe has three detailed science objectives:
        </div>
        <div className="list">
          <li>
            <span
              className="keyword"
              onClick={() => {
                !found && setFound(true);
              }}
            >
              Trace the flow of energy
            </span>
            that heats and accelerates the solar corona and solar wind.
          </li>
          <li>
            Determine the
            <span
              className="keyword"
              onClick={() => {
                !found && setFound(true);
              }}
            >
              structure and dynamics
            </span>{" "}
            of the plasma and magnetic fields at the sources of the solar wind.
          </li>
          <li>
            Explore mechanisms that
            <span
              className="keyword"
              onClick={() => {
                !found && setFound(true);
              }}
            >
              accelerate and transport
            </span>{" "}
            energetic particles.
          </li>
        </div>
        <div className="p">
          Scientists have sought these answers for more than 60 years, but the
          investigation requires sending a probe right through the 2,500 degrees
          Fahrenheit heat of the corona.
        </div>
      </div>
      <div className="right-flex">
        <div className="picture">
          <img src={img.src} alt={img.alt} />
        </div>
        <Stamp
          img={"./assets/solar-flare.png"}
          alt={"NASA Solar Flare Stamp"}
          found={found}
        ></Stamp>
      </div>
    </div>
  );
};

export default TheSolarMission2;

const imgs = [
  {
    src: "https://geekreply.com/wp-content/uploads/2015/09/ulsar.jpg",
    alt: "dummy alt",
  },
  {
    src: "https://geekreply.com/wp-content/uploads/2015/09/ulsar.jpg",
    alt: "dummy alt",
  },
  {
    src: "https://geekreply.com/wp-content/uploads/2015/09/ulsar.jpg",
    alt: "dummy alt",
  },
];
