import React from "react";

const Card = ({ title, price, cName, content, arg1, arg2, arg3 }) => {
  return (
    <article className={`card`}>
      <div className="card-header">
        <i className={`card-icon ${cName}`}></i>
        <h3 className="card-title">{title}</h3>
        <h4 className="card-price">{price} €</h4>
        <p className="card-summary">{content}</p>
      </div>
      <hr />
      <div className="card-body">
        <ul>
          <li>{arg1}</li>
          <li>{arg2}</li>
          <li>{arg3}</li>
        </ul>
      </div>
    </article>
  );
};

export default Card;
