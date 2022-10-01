import Header from "./components/Header";
import Frame from "./components/Frame";
import Scroll from "./components/Scroll";
import "./style/style.css";
import { useState } from "react";

function App() {
  const timeline = [
    { name: "The Beginning", frameId: "FTB", color: "green" },
    { name: "1958", frameId: "Y58", color: "purple" },
    { name: "1962", frameId: "Y62", color: "pink" },
  ];

  const [activeFrameId, setActiveFrameId] = useState("FTB");

  return (
    <div id="app">
      <div id="left"></div>
      <div id="mid">
        <Header timeline={timeline} activeFrameId={activeFrameId}></Header>
        <Frame timeline={timeline} activeFrameId={activeFrameId}></Frame>
        <Scroll
          timeline={timeline}
          setActiveFrameId={setActiveFrameId}
        ></Scroll>
      </div>
      <div id="right"></div>
    </div>
  );
}

export default App;
