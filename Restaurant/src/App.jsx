import { useState, useCallback, useRef } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useInView, InView } from "react-intersection-observer";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home";
import Menu from "./components/menu";
import OurStory from "./components/ourStory";

function App() {
  // const setRefs = useCallback(
  //   (node) => {
  //     ref.current = node;
  //     inViewRef(node);
  //   },
  //   [inViewRef]
  // );

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/menu" element={<Menu />}></Route>
        <Route path="/about" element={<OurStory />}></Route>
      </Routes>
    </div>
  );
}

export default App;
