import React from "react";

const Timeline = ({ timeline, setFrameId }) => {
  return (
    <div id="timeline">
      <div className="move" id="prev">
        Previous
      </div>
      <div id="scroll">
        {timeline.map((event) => (
          <div
            className={`event ${event.color}`}
            onClick={() => {
              setFrameId(event.frameId);
            }}
          >
            {event.name}
          </div>
        ))}
      </div>

      <div className="move" id="next">
        Next
      </div>
    </div>
  );
};

export default Timeline;
