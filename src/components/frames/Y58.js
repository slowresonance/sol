import React, { useState } from "react";
import Stamp from "../Stamp";

const Y58 = () => {
  const [found, setFound] = useState(false);
  return (
    <div id="Y58">
      <div id="left-flex">
        <div className="p">
          The article predicted the existence of the{" "}
          <span
            className="keyword"
            onClick={() => {
              !found && setFound(true);
            }}
          >
            solar wind
          </span>
          , a stream of particles continuously escaping the Sun.
        </div>
        <div className="p">
          Parker's theory described that in the sun's corona, plasma is
          continually heated with temperatures in this region reaching a
          blistering 2 million degrees Celsius.
        </div>
        <div className="p">
          Eventually, the plasma becomes so hot that the sun's gravity can no
          longer hold it down so it is hurled into space as the solar wind,
          dragging the sun's magnetic field along with it.
        </div>
      </div>
      <div id="right-flex">
        <div className="video-container">
          <div className="embed">
            <iframe
              width="350"
              height="197"
              src="https://www.youtube.com/embed/oHHSSJDJ4oo"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen={true}
            ></iframe>
          </div>
          <div className="description">
            How are solar winds formed? - kurzgesagt
          </div>
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

export default Y58;
