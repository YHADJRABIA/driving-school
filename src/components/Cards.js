import React, { useContext } from "react";
import Card from "./Card";
import { DataContext } from "../contexts/DataContext";

const Cards = () => {
  const { cards } = useContext(DataContext);
  return (
    <section className="service-section" id="our-services">
      <h2 className="service-section-title">Nos offres</h2>
      <div className="cards">
        {cards.map((el, id) => (
          <Card
            key={id}
            title={el.title}
            price={el.price}
            cName={el.cName}
            content={el.content}
            arg1={el.arg1}
            arg2={el.arg2}
            arg3={el.arg3}
          />
        ))}
      </div>
    </section>
  );
};

export default Cards;
