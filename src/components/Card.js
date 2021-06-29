import React from "react";

const Card = () => {
  return (
    <article className="card">
      <div className="card-header">
        <h3 className="card-title">Titre de l'offre</h3>
        <h4 className="card-price">#### €</h4>
      </div>

      <div className="card-body"></div>
    </article>
  );
};

export default Card;
