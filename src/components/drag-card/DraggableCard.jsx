import React from "react";
import "./styles.css";
const DraggableCard = ({ item }) => {
  return (
    <div className="draggable-card">
      <img src={item.src} height={100} width={100} alt={item.name} />
      <p>{item.name}</p>
    </div>
  );
};

export default DraggableCard;
