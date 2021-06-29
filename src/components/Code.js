import React from "react";
import CodeImage from "./svg/CodeImage";
import Tada from "react-reveal/Tada";

const Code = () => {
  return (
    <section id="code-section" className="code-section">
      <div className="code-section-text">
        <h2 className="code-section-title">Code de la route</h2>
        <p className="code-section-content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem quos
          mollitia nemo ex impedit dicta dolorum amet ullam, doloremque odio
          nesciunt consectetur incidunt perspiciatis alias, porro quas fuga.
          Neque, itaque?
        </p>
      </div>
      <Tada>
        <CodeImage />
      </Tada>
    </section>
  );
};

export default Code;
