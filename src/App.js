import Header from "./components/Header";
import Frame from "./components/Frame";
import Scroll from "./components/Scroll";
import "./style/style.css";
import { useState } from "react";
import Collection from "./components/Collection";

function App() {
  const timeline = [
    { name: "The Beginning", frameId: "FTB", color: "green" },
    { name: "1958", frameId: "Y58", color: "purple" },
    { name: "TSM1", frameId: "TSM1", color: "pink" },
    { name: "TSM2", frameId: "TSM2", color: "pink" },
  ];

  const [activeFrameId, setActiveFrameId] = useState("TSM1");
  const [collection, setCollection] = useState(cltns);

  return (
    <>
      <div id="app">
        <div id="left"></div>
        <div id="mid">
          <Header timeline={timeline} activeFrameId={activeFrameId}></Header>
          <Frame
            collection={collection}
            setCollection={setCollection}
            timeline={timeline}
            activeFrameId={activeFrameId}
          ></Frame>
          <Scroll
            timeline={timeline}
            setActiveFrameId={setActiveFrameId}
          ></Scroll>
        </div>
        <div id="right"></div>
      </div>
      <Collection
        collection={collection}
        setCollection={setCollection}
      ></Collection>
    </>
  );
}

export default App;

const cltns = [
  {
    id: "coronal-hole",
    img: "./assets/coronal-hole.png",
    alt: "Coronal Hole",
    found: true,
  },
  {
    id: "sunspots",
    img: "./assets/sunspots.png",
    alt: "Sunspots",
    found: true,
  },
];
