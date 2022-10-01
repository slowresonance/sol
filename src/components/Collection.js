import React, { useState } from "react";
import Stamp from "./Stamp";

const Collection = ({ collection, setCollection }) => {
  const [show, setShow] = useState(false);

  return (
    <div id="collection">
      {show && (
        <div id="canvas">
          {collection.map((collectable) => (
            <div className="stamp-collected" key={collectable.alt}>
              <Stamp
                img={collectable.img}
                alt={collectable.alt}
                found={collectable.found}
              ></Stamp>
            </div>
          ))}
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
