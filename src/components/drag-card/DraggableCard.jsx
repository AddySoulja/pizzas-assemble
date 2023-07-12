import React from "react";

const DraggableCard = ({ item }) => {
  return (
    <div key={item.name}>
      <img src={item.src} height={100} width={100} alt={item.name} />
      <p>{item.name}</p>
    </div>
  );
};

export default DraggableCard;
