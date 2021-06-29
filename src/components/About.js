import React, { useContext } from "react";
import Badge from "./Badge";
import Flip from "react-reveal/Flip";

import { DataContext } from "../contexts/DataContext";

const About = () => {
  const { services } = useContext(DataContext);
  return (
    <section id="about-section" className="about-section">
      <div className="about-section-text">
        <h2 className="about-section-title">À propos</h2>
        <p className="about-section-content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem quos
          mollitia nemo ex impedit dicta dolorum amet ullam, doloremque odio
          nesciunt consectetur incidunt perspiciatis alias, porro quas fuga.
          Neque, itaque?
        </p>
      </div>
      <div className="badges">
        {services.map((el, id) => (
          <div key={id} className="badge">
            <Flip top>
              <Badge id={id} />
            </Flip>
            <h5 className="badge-title">{el.title}</h5>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
