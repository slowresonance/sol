import React, { useState } from "react";

const TSM2 = () => {
  const [img, setImg] = useState(imgs[0]);

  return (
    <div id="TSM2">
      <div className="left-flex">
        <div className="p">
          Parker Solar Probe has three detailed science objectives:
        </div>
        <div className="list">
          <li>
            <span
              className="keyword"
              onClick={() => {
                setImg();
              }}
            >
              Trace the flow of energy
            </span>
            that heats and accelerates the solar corona and solar wind.
          </li>
          <li>
            Determine the
            <span className="keyword">structure and dynamics</span> of the
            plasma and magnetic fields at the sources of the solar wind.
          </li>
          <li>
            Explore mechanisms that
            <span className="keyword">accelerate and transport</span> energetic
            particles.
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
      </div>
    </div>
  );
};

export default TSM2;

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
