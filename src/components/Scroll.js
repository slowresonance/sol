import React from "react";
import Event from "./Event";

const Scroll = ({ timeline, setActiveFrameId }) => {
  return (
    <div id="scroll">
      {timeline.map((event) => (
        <Event
          name={event.name}
          frameId={event.frameId}
          color={event.color}
          setActiveFrameId={setActiveFrameId}
          key={event.frameId}
        ></Event>
      ))}
    </div>
  );
};

export default Scroll;
