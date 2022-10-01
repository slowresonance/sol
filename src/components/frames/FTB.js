import React from "react";
import { WindupChildren } from "windups";

const FTB = () => {
  return (
    <div id="FTB">
      <div id="left-flex">
        <div className="title">
          Dynamics of the Interplanetary Gas and Magnetic Fields
        </div>
        <div className="sub-title">Parker, E. N. November 1958</div>
        <div className="img">
          <img src="./assets/ftb.png" alt="" />
        </div>
        <div className="sub-title c5 underline">
          Astrophysical Journal, vol. 128, p.664
        </div>
      </div>
      <div id="right-flex">
        <div className="p">
          In 1958, Parker — then a young professor at the university's Enrico
          Fermi Institute — published an article in the Astrophysical Journal
          called
          <span className="highlight yellow">
            "Dynamics of the interplanetary gas and magnetic fields"
          </span>
          .
        </div>
        <div className="p">
          Parker believed there was high speed matter and magnetism constantly
          escaping the sun, and that it affected the planets and space
          throughout our solar system.
        </div>
        <WindupChildren>
          <div className="p i f18">
            “...gas is often streaming outward in all directions from the sun
            with velocities of the order of
            <span className="highlight yellow">500-1500 km/sec.</span>”
          </div>
        </WindupChildren>
      </div>
    </div>
  );
};

export default FTB;
