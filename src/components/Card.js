import React from "react";

const Card = ({ title, price, bullets }) => {
  return (
    <article className="card">
      <div className="card-header">
        <i className="card-icon fas fa-book"></i>
        <h3 className="card-title">Code de la route</h3>
        <h4 className="card-price">100 €</h4>
        <p className="card-summary">Lorem ipsum dolor sit amet,</p>
      </div>
      <hr />
      <div className="card-body">
        <ul>
          <li>Argument 1</li>
          <li>Argument 2</li>
          <li>Argument 3</li>
        </ul>
      </div>
    </article>
  );
};

export default Card;
