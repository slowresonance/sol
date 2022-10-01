import React from "react";

const Event = ({ name, frameId, color, setActiveFrameId }) => {
  return (
    <div className={`event ${color}`} onClick={() => setActiveFrameId(frameId)}>
      {name}
    </div>
  );
};

export default Event;
