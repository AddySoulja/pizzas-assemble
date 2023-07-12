import React from "react";
import "./styles.css";
const Card = ({ item }) => {
  return (
    <div className="item">
      <img src={item.src} height={250} width={250} alt={item.name} />
      <div className="item-text">
        <p>{item.name}</p>
        <input type="checkbox" />
      </div>
    </div>
  );
};

export default Card;
