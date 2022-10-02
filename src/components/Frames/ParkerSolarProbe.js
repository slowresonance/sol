import React from "react";

const ParkerSolarProbe = () => {
  return (
    <div id="parker-solar-probe">
      <div className="flex-left">
        <div className="p">
          Solar Probe Project Scientist The Parker Space Probe launched in 2018
          for a single mission: To observe the outer corona of the Sun.
        </div>
        <div className="p">
          The main goal of the mission is to trace how energy and heat move
          through the solar corona and to explore what accelerates the solar
          wind as well as solar energetic particles.
        </div>
        <div className="p">
          "Parker Solar Probe is going to answer questions about solar physics
          that we've puzzled over for more than six decades" - Nicola Fox,
          Parker
        </div>
      </div>
      <div className="flex-right">
        <img
          src="https://solarsystem.nasa.gov/system/content_pages/main_images/1708_Parker-Solar-Probe_ObservingSun_1280.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default ParkerSolarProbe;
