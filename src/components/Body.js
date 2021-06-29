import React from "react";
import Cards from "./Cards";
import Code from "./Code";
import Driving from "./Driving";
import About from "./About";
const Body = () => {
  return (
    <main>
      <Code />
      <Driving />
      <Cards />
      <About />
    </main>
  );
};

export default Body;
