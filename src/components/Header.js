import React from "react";

const Header = ({ frameId, timeline }) => {
  const getTitle = () => {
    for (let event of timeline) {
      if (event.frameId === frameId) return event.name;
    }
  };
  return (
    <div id="header">
      <div className="title">
        {() => {
          getTitle();
        }}
      </div>
    </div>
  );
};

export default Header;
