import React, { useState } from "react";
import Stamp from "./Stamp";

const Collection = () => {
  const [show, setShow] = useState(false);

  return (
    <div id="collection">
      {show && (
        <div id="canvas">
          <div className="stamp-collected">
            <Stamp
              img={"./assets/solar-flare.png"}
              alt={"NASA Solar Flare Stamp"}
            ></Stamp>
          </div>
          <div className="stamp-collected">
            <Stamp
              img={"./assets/solar-flare.png"}
              alt={"NASA Solar Flare Stamp"}
            ></Stamp>
          </div>
          <div className="stamp-collected">
            <Stamp
              img={"./assets/solar-flare.png"}
              alt={"NASA Solar Flare Stamp"}
            ></Stamp>
          </div>
          <div className="stamp-collected">
            <Stamp
              img={"./assets/solar-flare.png"}
              alt={"NASA Solar Flare Stamp"}
            ></Stamp>
          </div>
          <div className="stamp-collected"></div>
          <div className="stamp-collected"></div>
        </div>
      )}
      <div id="menu">
        <div className="title">collection</div>
        <div className="toggle" onClick={() => setShow(!show)}>
          {show ? "hide" : "open"}
        </div>
      </div>
    </div>
  );
};

export default Collection;
