import React from "react";
import Stamp from "../Stamp";

const TSM1 = () => {
  return (
    <div id="TSM1">
      <div className="left-flex">
        <div className="mission">
          The main goal of the mission is to trace how energy and heat move
          through the solar corona and to explore what accelerates the solar
          wind as well as solar energetic particles.
        </div>
        <div className="gallery">
          <div className="img">
            <img
              src="https://www.esa.int/var/esa/storage/images/esa_multimedia/images/2020/10/new_view_of_2012_solar_activity_gif/22288949-2-eng-GB/New_view_of_2012_solar_activity_gif.gif"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="right-flex">
        <div className="title">Did you know?</div>
        <div className="p">The corona is the outer atmosphere of the Sun.</div>
        <div className="p">
          The material in the corona is an extremely hot but very tenuous
          plasma. The temperature in the corona is{" "}
          <span className="highlight yellow">more than a million degrees</span>,
          surprisingly much hotter than the temperature at the Sun's surface
          which is around 5,500° C
        </div>
      </div>
    </div>
  );
};

export default TSM1;
