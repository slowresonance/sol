import React from "react";

const Ach = ({ achs }) => {
  return (
    <div id="achs">
      <div className="title">Achievements</div>
      <div className="list">
        {achs &&
          achs.map((item) => (
            <div className="achievement">
              <div className="name">{item.name}</div>
              <div className="progress">
                {Math.floor(Math.random() * 10 + 1)}/
                {10 + Math.floor(Math.random() * 10 + 1)}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Ach;
