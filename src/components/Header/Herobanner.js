import React from "react";
import HeroImage from "../svg/HeroImage";

const Herobanner = () => {
  return (
    <>
      <div className="hero-banner">
        <HeroImage />
        <div className="hero-text">
          <h1 className="hero-title">L'auto-école qui en jette !</h1>
          <h4 className="hero-content">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae,
            nemo. Natus minima voluptatem odio placeat debitis laboriosam
            consequatur nam error unde dolore. Exercitationem quasi molestias,
            maiores similique repellat qui minima!
          </h4>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#f3f4f5"
          fillOpacity="1"
          d="M0,32L48,69.3C96,107,192,181,288,192C384,203,480,149,576,144C672,139,768,181,864,165.3C960,149,1056,75,1152,53.3C1248,32,1344,64,1392,80L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        ></path>
      </svg>
    </>
  );
};

export default Herobanner;
