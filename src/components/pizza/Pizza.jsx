import React from "react";
import { useSelector } from "react-redux";
import crust from "../../assets/ingredients/crust.png";
import Toppings from "../toppings/Toppings";
import "./styles.css";

const Pizza = ({ addedToppings, setAddedToppings }) => {
  const { list } = useSelector((state) => state.ingredients);

  const handleDragOver = (e) => e.preventDefault();
  const handleDrop = (e) => {
    e.preventDefault();
    const topping = e.dataTransfer.getData("text/plain");
    return (
      !addedToppings.includes(topping) &&
      setAddedToppings((prev) => [...prev, topping])
    );
  };

  return (
    <div
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      className="crust"
      style={{ backgroundImage: `url(${crust})` }}
    >
      <div className="inside">
        {list &&
          list.map(
            (topping) =>
              addedToppings.includes(topping.name) && (
                <Toppings key={topping.name} topping={topping} />
              )
          )}
      </div>
    </div>
  );
};

export default Pizza;
