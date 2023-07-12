import React from "react";
import "./styles.css";

const DraggableCard = ({ item }) => {
  const onDragStart = (e) => e.dataTransfer.setData("text/plain", item.name);

  return (
    <div draggable onDragStart={onDragStart} className="draggable-card">
      <img src={item.src} height={100} width={100} alt={item.name} />
      <p>{item.name}</p>
    </div>
  );
};

export default DraggableCard;
