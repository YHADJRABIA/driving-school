import React from "react";
import DrivingImage from "./svg/DrivingImage";
import LightSpeed from "react-reveal/LightSpeed";
const Driving = () => {
  return (
    <section id="driving-section" className="driving-section">
      <div className="driving-section-text">
        <h2 className="driving-section-title">Permis de conduire</h2>
        <p className="driving-section-content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem quos
          mollitia nemo ex impedit dicta dolorum amet ullam, doloremque odio
          nesciunt consectetur incidunt perspiciatis alias, porro quas fuga.
          Neque, itaque?
        </p>
      </div>
      <LightSpeed right>
        <DrivingImage />
      </LightSpeed>
    </section>
  );
};

export default Driving;
